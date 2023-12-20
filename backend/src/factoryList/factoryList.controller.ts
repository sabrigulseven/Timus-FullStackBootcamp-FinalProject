import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FactoryListService } from './factoryList.service';
import { FactoryListDto } from './dto/factoryList.dto';

@Controller('factoryList')
export class FactoryListController {
  constructor(private readonly factoryListService: FactoryListService) {}

  @Get()
  async getAllFactories() {
    return this.factoryListService.getAllFactories();
  }

  @Get(':id')
  async getOneFactory(@Param('id') id: number) {
    return this.factoryListService.getOneFactory(id);
  }

  @Post()
  async createFactory(@Body() factoryData: FactoryListDto) {
    return this.factoryListService.createFactory(factoryData);
  }

  @Put(':id')
  async updateFactory(@Param('id') id: number, @Body() factoryData: Partial<FactoryListDto>) {
    return this.factoryListService.updateFactory(id, factoryData);
  }

  @Delete(':id')
  async deleteFactory(@Param('id') id: number) {
    return this.factoryListService.deleteFactory(id);
  }

  @Get(':id/factoryDetails')
  async getFactoryDetails(@Param('id') id: number) {
    return this.factoryListService.getFactoryDetail(id);
  }
}
