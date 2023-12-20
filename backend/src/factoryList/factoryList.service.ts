import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { FactoryList } from './entities/factoryList.entity';
import { FactoryDetail } from 'src/factoryDetail/entities/factoryDetail.entity';

@Injectable()
export class FactoryListService {
  constructor(
    @InjectRepository(FactoryList)
    private factoryListRepository: Repository<FactoryList>,
  ) {}

  async getAllFactories(): Promise<FactoryList[]> {
    return this.factoryListRepository.find();
  }

  async getOneFactory(id: number): Promise<FactoryList | undefined> {
    return this.factoryListRepository.findOne({
      where:{
        id: id
      }
    });
  }

  async createFactory(factoryData: Partial<FactoryList>): Promise<FactoryList> {
    const newFactory = this.factoryListRepository.create(factoryData);
    return this.factoryListRepository.save(newFactory);
  }

  async updateFactory(id: number, factoryData: Partial<FactoryList>): Promise<FactoryList> {
    let factoryToUpdate = await this.factoryListRepository.findOne({
      where:{
        id: id
      }
    });
    if (!factoryToUpdate) {
      throw new NotFoundException('Factory not found');
    }
  
    factoryToUpdate = { ...factoryToUpdate, ...factoryData };
    return this.factoryListRepository.save(factoryToUpdate);
  }
  
  async deleteFactory(id: number): Promise<DeleteResult> {
    return this.factoryListRepository.delete(id);
  }

  async getFactoryDetail(id: number): Promise<FactoryDetail | undefined> {
    const factory = await this.factoryListRepository.findOne({ 
      where: { id },
      relations: ['factoryDetail']
    });
    if (!factory) {
      throw new NotFoundException('Factory not found');
    }
    return factory.factoryDetail;
  }
  
}