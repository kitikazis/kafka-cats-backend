import { IsString, IsNotEmpty } from 'class-validator';

export class FavoritoDto {
  @IsString()
  @IsNotEmpty()
  image_id!: string;
}
