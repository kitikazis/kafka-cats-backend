import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GatosModule } from './gatos/gatos.module';
import { ImagenesModule } from './imagenes/imagenes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    GatosModule,
    ImagenesModule,
  ],
})
export class AppModule {}
