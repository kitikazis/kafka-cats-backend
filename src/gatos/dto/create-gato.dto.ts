import { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateGatoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  raza!: string;

  @IsNumber()
  @IsNotEmpty()
  edad!: number;

  @IsUrl()
  @IsNotEmpty()
  foto!: string;
}
