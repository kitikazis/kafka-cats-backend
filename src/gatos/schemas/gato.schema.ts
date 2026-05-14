import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GatoDocument = Gato & Document;

@Schema()
export class Gato {
  @Prop({ required: true })
  nombre!: string;

  @Prop({ required: true })
  raza!: string;

  @Prop({ required: true })
  edad!: number;

  @Prop({ required: true })
  foto!: string;
}

export const GatoSchema = SchemaFactory.createForClass(Gato);
