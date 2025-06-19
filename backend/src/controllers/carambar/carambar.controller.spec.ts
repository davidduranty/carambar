import { Test, TestingModule } from '@nestjs/testing';
import { CarambarController } from './carambar.controller';

describe('CarambarController', () => {
  let controller: CarambarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarambarController],
    }).compile();

    controller = module.get<CarambarController>(CarambarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
