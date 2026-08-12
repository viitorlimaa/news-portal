CREATE TABLE IF NOT EXISTS galerias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  texto TEXT,
  imagem TEXT,
  fotos TEXT,
  link TEXT,
  dataPublicacao TEXT,
  tags TEXT,
  ativo INTEGER DEFAULT 1
);
