import { Test, TestingModule } from '@nestjs/testing';
import { FactoryListService } from './factoryList.service';

describe('FactoryListService', () => {
  let service: FactoryListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryListService],
    }).compile();

    service = module.get<FactoryListService>(FactoryListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
