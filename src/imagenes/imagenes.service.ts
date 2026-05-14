import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { FavoritoDto } from './dto/favorito.dto';

@Injectable()
export class ImagenesService {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiUrl = this.configService.get<string>('CAT_API_URL') as string;
    this.apiKey = this.configService.get<string>('CAT_API_KEY') as string;
  }

  // Método para obtener imágenes de gatos
  async getImagenes() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/images/search`, {
        params: { limit: 10 },
        headers: { 'x-api-key': this.apiKey },
      }),
    );
    return response.data;
  }

  // Método para agregar un favorito
  async addFavorito(favoritoDto: FavoritoDto) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${this.apiUrl}/favourites`,
        { image_id: favoritoDto.image_id },
        { headers: { 'x-api-key': this.apiKey } },
      ),
    );
    return response.data;
  }

  // Método para obtener los favoritos
  async getFavoritos() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/favourites`, {
        headers: { 'x-api-key': this.apiKey },
      }),
    );
    return response.data;
  }
}
