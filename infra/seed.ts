import db from "./db.js";

const insert = db.prepare(`
  INSERT INTO news (titulo, chapeu, texto, autor, imagem, dataPublicacao, tags, link, ativo)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insert.run(
  "MasterChef Brasil 2026: conheça os 18 participantes da nova temporada",
  "Reality culinário",
  "A 13ª temporada do MasterChef Brasil já tem seus participantes definidos. Entre os 18 cozinheiros amadores estão uma médica de família pernambucana, uma bombeira militar de Santa Catarina e um estilista de 60 anos de Americana (SP). As seletivas em grupo definiram quem pegaria o avental para disputar o prêmio de R$ 300 mil.",
  "Redação Band",
  "masterchef-2026-participantes.jpg",
  "2026-06-03T00:00:00.000Z",
  "masterchef,culinária,band,reality",
  "https://www.adorocinema.com/televisao/noticias/noticia-1000207056.html",
  1,
);

insert.run(
  "Daniela Dantas é campeã do MasterChef Brasil 2025",
  "Temporada 12",
  "A advogada Daniela Dantas conquistou o troféu da 12ª edição do MasterChef Brasil, consolidando uma base de fãs ao longo da temporada. A competição contou com o retorno dos jurados Érick Jacquin, Helena Rizzo e Henrique Fogaça, que também assumiram o papel de apresentadores após a saída de Ana Paula Padrão.",
  "Redação Band",
  "daniela-dantas-masterchef.jpg",
  "2025-11-11T00:00:00.000Z",
  "masterchef,campeã,culinária,band",
  "https://www.band.com.br/entretenimento/masterchef",
  1,
);

insert.run(
  "MasterChef Brasil estreia 12ª temporada com prêmio recorde de R$ 500 mil",
  "Nova temporada",
  "A 12ª temporada do MasterChef Brasil estreou em 27 de maio de 2025 com novidades: os três jurados assumiram também a apresentação do programa após a saída de Ana Paula Padrão. O prêmio bateu recorde histórico, chegando a R$ 500 mil divididos entre dinheiro, consultoria do iFood e gestão financeira do Asaas.",
  "CNN Brasil",
  "masterchef-estreia-2025.jpg",
  "2025-05-27T00:00:00.000Z",
  "masterchef,estreia,prêmio,band,jacquin",
  "https://www.cnnbrasil.com.br/entretenimento/masterchef-brasil-2025-o-que-esperar-da-estreia-da-nova-edicao-do-reality/",
  1,
);

insert.run(
  "Paola Carosella retorna ao MasterChef Brasil como convidada especial",
  "Nostalgia na cozinha",
  "Jurada das sete primeiras temporadas, Paola Carosella voltou ao MasterChef Brasil na 12ª edição como convidada. Em nota, a chef revelou que o programa mudou sua vida radicalmente, levando-a de uma chef pouco conhecida a uma comunicadora de sucesso.",
  "CNN Brasil",
  "paola-carosella-masterchef.jpg",
  "2025-05-27T00:00:00.000Z",
  "masterchef,paola,jurada,band,convidada",
  "https://www.cnnbrasil.com.br/entretenimento/masterchef-brasil-2025-o-que-esperar-da-estreia-da-nova-edicao-do-reality/",
  1,
);

console.log("✅ Notícias do MasterChef inseridas com sucesso!");
