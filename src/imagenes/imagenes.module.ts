import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';

@Module({
  imports: [HttpModule],
  controllers: [ImagenesController],
  providers: [ImagenesService],
})
export class ImagenesModule {}
