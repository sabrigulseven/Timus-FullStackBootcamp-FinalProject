import { Test, TestingModule } from '@nestjs/testing';
import { FactoryListController } from './factoryList.controller';

describe('FactoryListController', () => {
  let controller: FactoryListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryListController],
    }).compile();

    controller = module.get<FactoryListController>(FactoryListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
