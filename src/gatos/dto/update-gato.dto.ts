import { IsString, IsNumber, IsUrl, IsOptional } from 'class-validator';

export class UpdateGatoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  raza?: string;

  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsUrl()
  foto?: string;
}
