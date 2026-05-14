# Cat Manager API

Backend desarrollado con NestJS, MongoDB y TypeScript.

## Requisitos

- Node.js 24
- Docker Desktop

## Instalación

1. Clona el repositorio

```bash
git clone TU_URL_DE_GITHUB
cd cats-backend
```

2. Instala las dependencias

```bash
npm install
```

3. Crea el archivo `.env` basado en `.env.example`

```bash
cp .env.example .env
```

## Correr con Docker

```bash
docker-compose up -d --build
```

## Correr sin Docker

1. Levanta MongoDB con Docker

```bash
docker-compose up -d mongodb
```

2. Corre el backend

```bash
npm run start:dev
```

## Endpoints

### Imágenes

| Método | Ruta                | Descripción                 |
| ------ | ------------------- | --------------------------- |
| GET    | /imagenes           | 10 imágenes aleatorias      |
| POST   | /imagenes/favoritos | Marcar imagen como favorita |
| GET    | /imagenes/favoritos | Listar imágenes favoritas   |

### Gatos

| Método | Ruta       | Descripción            |
| ------ | ---------- | ---------------------- |
| GET    | /gatos     | Listar todos los gatos |
| GET    | /gatos/:id | Obtener un gato        |
| POST   | /gatos     | Crear un gato          |
| PUT    | /gatos/:id | Actualizar un gato     |
| DELETE | /gatos/:id | Eliminar un gato       |

## Tecnologías

- NestJS 11
- MongoDB 8
- Mongoose 8
- TypeScript 5.8
- Docker
