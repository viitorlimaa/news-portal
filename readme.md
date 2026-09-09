# News Portal

Backend em TypeScript para consulta e gestão de notícias, vídeos, podcasts e galerias.

## Descrição

Este projeto expõe uma API REST para consultar e gerenciar conteúdos de um portal de notícias. Ele foi desenvolvido com Node.js, Express e SQLite, com validação de entradas utilizando Zod.

## Funcionalidades

- Retorna a versão da API no endpoint raiz
- Lista notícias paginadas
- Retorna notícia por ID
- Cria notícias
- Remove notícias
- Lista vídeos paginados
- Retorna vídeo por ID
- Cria vídeos
- Remove vídeos
- Lista podcasts paginados
- Retorna podcast por ID
- Cria podcasts
- Remove podcasts
- Lista galerias paginadas
- Retorna galeria por ID
- Cria galerias
- Remove galerias

## Stack

- TypeScript
- Node.js
- Express
- SQLite
- better-sqlite3
- Zod
- tsyringe
- reflect-metadata
- tsx
- Jest

## Requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
```

## Configuração de ambiente

Crie um arquivo `.env` com base no exemplo:

```bash
copy .env.example .env
```

## Variáveis de ambiente

```env
PORT=5000
DB_PATH=./database.db
```

## Execução em desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:5000
```

## Build

```bash
npm run build
```

## Execução em produção

```bash
npm start
```

## Verificação de tipos

```bash
npm run check
```

## Lint

```bash
npm run lint
```

## Testes

```bash
npm test
```

## API

### GET /

Retorna a versão da API.

### GET /api/v1/news/:page/:qtd

Retorna notícias paginadas.

### GET /api/v1/news/:id

Retorna uma notícia por ID.

### POST /api/v1/news

Cria uma notícia.

### DELETE /api/v1/news/:id

Remove uma notícia.

### GET /api/v1/videos/:page/:qtd

Retorna vídeos paginados.

### GET /api/v1/videos/:id

Retorna um vídeo por ID.

### POST /api/v1/videos

Cria um vídeo.

### DELETE /api/v1/videos/:id

Remove um vídeo.

### GET /api/v1/podcasts/:page/:qtd

Retorna podcasts paginados.

### GET /api/v1/podcasts/:id

Retorna um podcast por ID.

### POST /api/v1/podcasts

Cria um podcast.

### DELETE /api/v1/podcasts/:id

Remove um podcast.

### GET /api/v1/galleries/:page/:qtd

Retorna galerias paginadas.

### GET /api/v1/galleries/:id

Retorna uma galeria por ID.

### POST /api/v1/galleries

Cria uma galeria.

### DELETE /api/v1/galleries/:id

Remove uma galeria.

## Banco de dados

O projeto utiliza SQLite. O banco fica em `database.db` e o sistema deve criar as tabelas necessárias ao iniciar, se ainda não existirem.

## Licença

Este projeto está licenciado sob a licença MIT.
