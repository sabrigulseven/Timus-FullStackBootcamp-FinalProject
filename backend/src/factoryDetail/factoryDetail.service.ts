import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FactoryDetail } from './entities/factoryDetail.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class FactoryDetailService {
  constructor(
    @InjectRepository(FactoryDetail)
    private factoryDetailRepository: Repository<FactoryDetail>,
  ) {}

  async getAllFactoryDetails(): Promise<FactoryDetail[]> {
    return this.factoryDetailRepository.find();
  }

  async getFactoryDetail(id: number): Promise<FactoryDetail> {
    const factoryDetail = await this.factoryDetailRepository.findOne({
        where:{
          id: id
        }
      });
    if (!factoryDetail) {
      throw new NotFoundException('Factory Detail not found');
    }
    return factoryDetail;
  }

  async createFactoryDetail(factoryDetailData: Partial<FactoryDetail>): Promise<FactoryDetail> {
    const newFactoryDetail = this.factoryDetailRepository.create(factoryDetailData);
    return this.factoryDetailRepository.save(newFactoryDetail);
  }

  async updateFactoryDetail(id: number, factoryDetailData: Partial<FactoryDetail>): Promise<FactoryDetail> {
    let factoryDetailToUpdate = await this.factoryDetailRepository.findOne({
        where:{
          id: id
        }
      });
    if (!factoryDetailToUpdate) {
      throw new NotFoundException('Factory Detail not found');
    }
  
    factoryDetailToUpdate = { ...factoryDetailToUpdate, ...factoryDetailData };
    return this.factoryDetailRepository.save(factoryDetailToUpdate);
  }

  async deleteFactoryDetail(id: number): Promise<DeleteResult> {
    return this.factoryDetailRepository.delete(id);
  }
}
