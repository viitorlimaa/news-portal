# News-portal

## Descrição

Aplicação backend em TypeScript com Express para busca e consulta de notícias, podcasts, vídeos e galerias.

## Funcionalidades

- Retorna a versão da API no endpoint raiz
- Lista notícias paginadas
- Retorna notícia por ID.698
- Lista vídeos paginados
- Retorna vídeo por ID
- Lista galerias paginadas
- Retorna galeria por ID

## Tecnologias

- TypeScript
- Node.js
- Express
- better-sqlite3
- tsyringe
- reflect-metadata
- tsx

## Estrutura do projeto

- `program.ts`: ponto de entrada e inicialização do servidor
- `startup.ts`: configuração do Express e registro de rotas
- `infra/`: conexão SQLite, criação de tabelas e seed de dados
- `controllers/`: controladores responsáveis pelas rotas
- `services/`: regras de negócio e orquestração de dados
- `repository/`: acesso aos dados no banco SQLite
- `shared/`: container de injeção de dependências
- `models/`: classes e tipos do domínio
- `contracts/`: interfaces de serviços

## Instalação

```bash
npm install
```

## Configuração

Não há variáveis de ambiente utilizadas no código analisado.

## Execução

```bash
npm run dev
```

O servidor é executado na porta `5000`.

## Build

```bash
npm run build
```

```bash
npm start
```

## Verificação de tipo

```bash
npm run check
```

```bash
npm run check:diag
```

## API

### GET /

Retorna a versão da API.

### GET /api/v1/news/:page/:qtd

Retorna notícias paginadas.

Parâmetros:

- `page` — número da página
- `qtd` — quantidade de itens por página

Resposta:

- `result`: objeto com as propriedades `Page`, `Qtd`, `Total` e `Data`

### GET /api/v1/news/:id

Retorna uma notícia por ID.

Parâmetros:

- `id` — identificador da notícia

Resposta:

- `result`: objeto da notícia

### GET /api/v1/videos/:page/:qtd

Retorna vídeos paginados.

Parâmetros:

- `page` — número da página
- `qtd` — quantidade de itens por página

Resposta:

- `result`: objeto com as propriedades `Page`, `Qtd`, `Total` e `Data`

### GET /api/v1/videos/:id

Retorna um vídeo por ID.

Parâmetros:

- `id` — identificador do vídeo

Resposta:

- `result`: objeto do vídeo

### GET /api/v1/gallery/:page/:qtd

Retorna galerias paginadas.

Parâmetros:

- `page` — número da página
- `qtd` — quantidade de itens por página

Resposta:

- `result`: objeto com as propriedades `Page`, `Qtd`, `Total` e `Data`

### GET /api/v1/gallery/:id

Retorna uma galeria por ID.

Parâmetros:

- `id` — identificador da galeria

Resposta:

- `result`: objeto da galeria

## Banco de dados

A aplicação utiliza SQLite por meio da dependência `better-sqlite3`.

A conexão é criada em `infra/db.ts` e o arquivo de banco de dados local é `database.db`.

## Licença

ISC
