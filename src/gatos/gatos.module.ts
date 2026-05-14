import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';

@Module({
  controllers: [GatosController],
  providers: [GatosService]
})
export class GatosModule {}
