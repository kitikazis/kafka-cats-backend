import { Test, TestingModule } from '@nestjs/testing';
import { ImagenesController } from './imagenes.controller';

describe('ImagenesController', () => {
  let controller: ImagenesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenesController],
    }).compile();

    controller = module.get<ImagenesController>(ImagenesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
