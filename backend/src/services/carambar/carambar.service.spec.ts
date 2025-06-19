import { Test, TestingModule } from '@nestjs/testing';
import { CarambarService } from './carambar.service';

describe('CarambarService', () => {
  let service: CarambarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarambarService],
    }).compile();

    service = module.get<CarambarService>(CarambarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
