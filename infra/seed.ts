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

// Videos
const insertVideos = db.prepare(`
  INSERT INTO videos (titulo, texto, imagem, duracao, url, link, dataPublicacao, tags, ativo)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertVideos.run(
  "Anna Paula vence final do MasterChef 2020 e dedica prêmio à filha",
  "Cozinheira preparou um prato bem brasileiro e se emocionou ao levar grande prêmio da temporada",
  "https://thumb.mais.uol.com.br/16886600-xlarge.jpg?ver=1",
  "00:04:36",
  "https://player.mais.uol.com.br/?mediaId=16886600",
  "https://entretenimento.band.uol.com.br/videos/16886600/anna-paula-vence-final-do-masterchef-2020-e-dedica-premio-a-filha",
  "2020-12-30T03:12:00.000",
  "masterchef, masterchef 2020",
  1
);

insertVideos.run(
  "Muito boa essa mousse de caramelo, diz Jacquin para Marina",
  "Estudante fez uma tartelette de maçã com mousse de caramelo salgado com alguns erros técnicos, mas causou uma boa impressão",
  "https://thumb.mais.uol.com.br/16886599-xlarge.jpg?ver=1",
  "00:01:27",
  "https://player.mais.uol.com.br/?mediaId=16886599",
  "https://entretenimento.band.uol.com.br/videos/16886599/muito-boa-essa-mousse-de-caramelo-diz-jacquin-para-marina",
  "2020-12-30T03:12:00.000",
  "masterchef, masterchef 2020",
  1
);

// Galeria
const insertGalleries = db.prepare(`
  INSERT INTO galerias (titulo, texto, imagem, link, dataPublicacao, tags, ativo, fotos)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const fotos = JSON.stringify([
  {
    thumb: "https://pubimg.band.uol.com.br/files/eb9e64b485e94efc15aa.jpg",
    thumbNail: "https://pubimg.band.uol.com.br/files/eb9e64b485e94efc15aa.jpg",
    credito: "Carlos Reinis/Band",
    legenda: "No especial de Natal, mais famosos entraram na cozinha do MasterChef"
  },
  {
    thumb: "https://pubimg.band.uol.com.br/files/c41a8db03aa1f66c935e.jpg",
    thumbNail: "https://pubimg.band.uol.com.br/files/c41a8db03aa1f66c935e.jpg",
    credito: "Carlos Reinis/Band",
    legenda: "Foi a vez de César Menotti e Maraísa mostrarem seus dotes culinários"
  },
  {
    thumb: "https://pubimg.band.uol.com.br/files/fad9cc5b705a03195087.jpg",
    thumbNail: "https://pubimg.band.uol.com.br/files/fad9cc5b705a03195087.jpg",
    credito: "Carlos Reinis/Band",
    legenda: "Eles tiveram de enfrentar Péricles e Marília Mendonça no desafio"
  }
]);

insertGalleries.run(
  "Marília Mendonça, Péricles, César Menotti e Maraísa em especial de Natal",
  "Especial de natal com celebridades no MasterChef 2020",
  "https://pubimg.band.uol.com.br/files/eb9e64b485e94efc15aa.jpg",
  "https://entretenimento.band.uol.com.br/masterchef/noticias/16318389/marilia-mendonca-pericles-maraisa-e-cesar-menotti-participam-de-especial-de-natal-do-masterchef",
  "2020-08-12T10:26:00.000",
  "masterchef, masterchef 2020",
  1,
  fotos
);

const insertPodcast = db.prepare(`
  INSERT INTO podcasts (titulo, texto, imagem, url, duracao, dataPublicacao, tags, link, ativo)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertPodcast.run(
  "Podcast MasterChef: bastidores da cozinha",
  "Episódio especial com histórias por trás da nova temporada.",
  "podcast-masterchef.jpg",
  "https://www.band.com.br/podcast/masterchef.mp3",
  "24:15",
  "2026-06-03T00:00:00.000Z",
  "masterchef,podcast,bastidores",
  "https://www.band.com.br/masterchef/podcast",
  1,
);

console.log("✅ Seeds inseridos com sucesso!");
