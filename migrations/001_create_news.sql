CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  chapeu TEXT,
  texto TEXT,
  autor TEXT,
  imagem TEXT,
  dataPublicacao TEXT,
  tags TEXT,
  link TEXT,
  ativo INTEGER DEFAULT 1
);
