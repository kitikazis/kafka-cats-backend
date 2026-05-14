import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gato, GatoDocument } from './schemas/gato.schema';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';

@Injectable()
export class GatosService {
  constructor(@InjectModel(Gato.name) private gatoModel: Model<GatoDocument>) {}

  async findAll(): Promise<Gato[]> {
    return this.gatoModel.find().exec();
  }

  async findOne(id: string): Promise<Gato> {
    const gato = await this.gatoModel.findById(id).exec();
    if (!gato) {
      throw new NotFoundException(`Gato con id ${id} no encontrado`);
    }
    return gato;
  }

  async create(createGatoDto: CreateGatoDto): Promise<Gato> {
    const nuevoGato = new this.gatoModel(createGatoDto);
    return nuevoGato.save();
  }

  async update(id: string, updateGatoDto: UpdateGatoDto): Promise<Gato> {
    const gato = await this.gatoModel
      .findByIdAndUpdate(id, updateGatoDto, { new: true })
      .exec();
    if (!gato) {
      throw new NotFoundException(`Gato con id ${id} no encontrado`);
    }
    return gato;
  }

  async remove(id: string): Promise<void> {
    const gato = await this.gatoModel.findByIdAndDelete(id).exec();
    if (!gato) {
      throw new NotFoundException(`Gato con id ${id} no encontrado`);
    }
  }
}
