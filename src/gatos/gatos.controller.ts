import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { GatosService } from './gatos.service';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';

@Controller('gatos')
export class GatosController {
  constructor(private readonly gatosService: GatosService) {}

  @Get()
  findAll() {
    return this.gatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gatosService.findOne(id);
  }

  @Post()
  create(@Body() createGatoDto: CreateGatoDto) {
    return this.gatosService.create(createGatoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGatoDto: UpdateGatoDto) {
    return this.gatosService.update(id, updateGatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gatosService.remove(id);
  }
}
