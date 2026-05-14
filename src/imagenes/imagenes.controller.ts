import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { FavoritoDto } from './dto/favorito.dto';

@Controller('imagenes')
export class ImagenesController {
  constructor(private readonly imagenesService: ImagenesService) {}

  // Endpoint para obtener imágenes de gatos
  @Get()
  getImagenes() {
    return this.imagenesService.getImagenes();
  }
  // Endpoint para agregar un favorito
  @Post('favoritos')
  addFavorito(@Body() favoritoDto: FavoritoDto) {
    return this.imagenesService.addFavorito(favoritoDto);
  }
  // Endpoint para obtener los favoritos
  @Get('favoritos')
  getFavoritos() {
    return this.imagenesService.getFavoritos();
  }
}
