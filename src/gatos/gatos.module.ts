import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';
import { Gato, GatoSchema } from './schemas/gato.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gato.name, schema: GatoSchema }]),
  ],
  controllers: [GatosController],
  providers: [GatosService],
})
export class GatosModule {}
