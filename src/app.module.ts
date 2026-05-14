import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagenesModule } from './imagenes/imagenes.module';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [ImagenesModule, GatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
