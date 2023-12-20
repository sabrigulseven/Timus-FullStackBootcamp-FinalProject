import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FactoryDetailService } from './factoryDetail.service';
import { FactoryDetail } from './entities/factoryDetail.entity';

@Controller('factoryDetails')
export class FactoryDetailController {
  constructor(private readonly factoryDetailService: FactoryDetailService) {}

  @Get()
  async getAllFactoryDetails() {
    return this.factoryDetailService.getAllFactoryDetails();
  }

  @Get(':id')
  async getFactoryDetail(@Param('id') id: number) {
    return this.factoryDetailService.getFactoryDetail(id);
  }

  @Post()
  async createFactoryDetail(@Body() factoryDetailData: Partial<FactoryDetail>) {
    return this.factoryDetailService.createFactoryDetail(factoryDetailData);
  }

  @Put(':id')
  async updateFactoryDetail(@Param('id') id: number, @Body() factoryDetailData: Partial<FactoryDetail>) {
    return this.factoryDetailService.updateFactoryDetail(id, factoryDetailData);
  }

  @Delete(':id')
  async deleteFactoryDetail(@Param('id') id: number) {
    return this.factoryDetailService.deleteFactoryDetail(id);
  }
}
