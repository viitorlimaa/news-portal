CREATE TABLE IF NOT EXISTS podcasts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  texto TEXT,
  imagem TEXT,
  duracao TEXT,
  url TEXT,
  link TEXT,
  dataPublicacao TEXT,
  tags TEXT,
  ativo INTEGER DEFAULT 1
);
