import { Test, TestingModule } from '@nestjs/testing';
import { FactoryDetailController } from './factoryDetail.controller';

describe('FactoryDetailController', () => {
  let controller: FactoryDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryDetailController],
    }).compile();

    controller = module.get<FactoryDetailController>(FactoryDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
