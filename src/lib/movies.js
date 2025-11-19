export let movies = [
  {
    id: 1,
    title: 'The Muppets',
    year: 2011,
    description: 'Un fan dedicado reúne a los Muppets para salvar su viejo teatro de un codicioso magnate del petróleo.',
    stars: 4.2,
    platform: 'Disney+',
    genre: 'Familiar / Comedia',
    img: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5ffd1c71-db56-4f61-b781-fd476de31c34/compose?aspectRatio=1.78&format=webp&width=1200'
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    description: 'Un ladrón experto que roba secretos a través de los sueños recibe una oportunidad para borrar su pasado.',
    stars: 4.8,
    platform: 'Netflix',
    genre: 'Ciencia ficción / Suspenso',
    img: 'https://i.imgur.com/8ZQeZQF.jpeg'
  },
  {
    id: 3,
    title: 'Spirited Away',
    year: 2001,
    description: 'Una niña entra en un mundo mágico de espíritus y debe encontrar la forma de rescatar a sus padres.',
    stars: 4.9,
    platform: 'HBO Max',
    genre: 'Animación / Fantasía',
    img: 'https://i.imgur.com/7KS1zLp.jpeg'
  },
  {
    id: 4,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    description: 'Las aventuras de un legendario conserje y su joven protegido en un famoso hotel europeo.',
    stars: 4.3,
    platform: 'Hulu',
    genre: 'Comedia / Drama',
    img: 'https://i.imgur.com/8mIYUNs.jpeg'
  },
  {
    id: 5,
    title: 'Everything Everywhere All at Once',
    year: 2022,
    description: 'Una dueña de lavandería es arrastrada a una aventura multiversal para salvar la existencia.',
    stars: 4.7,
    platform: 'Paramount+',
    genre: 'Ciencia ficción / Acción',
    img: 'https://i.imgur.com/UOq7Yzb.jpeg'
  },

  /* ================================
     NUEVAS PELÍCULAS AGREGADAS
     ================================ */

  {
    id: 6,
    title: 'Interstellar',
    year: 2014,
    description: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    stars: 4.9,
    platform: 'Netflix',
    genre: 'Ciencia ficción / Drama',
    img: 'https://i.imgur.com/2qVf3Cc.jpeg'
  },
  {
    id: 7,
    title: 'La La Land',
    year: 2016,
    description: 'Una actriz y un músico luchan por cumplir sus sueños mientras viven un romance inolvidable.',
    stars: 4.6,
    platform: 'Amazon Prime',
    genre: 'Musical / Romance',
    img: 'https://i.imgur.com/9jOZ3Rz.jpeg'
  },
  {
    id: 8,
    title: 'Coco',
    year: 2017,
    description: 'Un niño apasionado por la música viaja al Mundo de los Muertos para descubrir la verdad de su familia.',
    stars: 4.8,
    platform: 'Disney+',
    genre: 'Animación / Familiar',
    img: 'https://i.imgur.com/HCavcKB.jpeg'
  },
  {
    id: 9,
    title: 'The Batman',
    year: 2022,
    description: 'Batman investiga una serie de asesinatos que lo llevan a descubrir una red de corrupción en Ciudad Gótica.',
    stars: 4.5,
    platform: 'HBO Max',
    genre: 'Acción / Crimen',
    img: 'https://i.imgur.com/wLXOrCJ.jpeg'
  },
  {
    id: 10,
    title: 'Dune',
    year: 2021,
    description: 'Un joven noble debe enfrentarse a un destino peligroso en el planeta desértico Arrakis.',
    stars: 4.6,
    platform: 'HBO Max',
    genre: 'Ciencia ficción / Aventura',
    img: 'https://i.imgur.com/LQe9u8n.jpeg'
  },
  {
    id: 11,
    title: 'Avatar',
    year: 2009,
    description: 'Un soldado parapléjico se integra a una tribu alienígena y lucha por defender su hogar.',
    stars: 4.3,
    platform: 'Disney+',
    genre: 'Ciencia ficción / Aventura',
    img: 'https://i.imgur.com/LmsWbXa.jpeg'
  },
  {
    id: 12,
    title: 'Pulp Fiction',
    year: 1994,
    description: 'Varias historias criminales se cruzan en un cóctel caótico lleno de humor negro y violencia.',
    stars: 4.7,
    platform: 'Amazon Prime',
    genre: 'Crimen / Drama',
    img: 'https://i.imgur.com/5Ax0QYj.jpeg'
  },
  {
    id: 13,
    title: 'Mad Max: Fury Road',
    year: 2015,
    description: 'En un desierto postapocalíptico, una mujer rebelde se une a un fugitivo para escapar de un tirano.',
    stars: 4.8,
    platform: 'HBO Max',
    genre: 'Acción / Ciencia ficción',
    img: 'https://i.imgur.com/DlKSk7M.jpeg'
  },
  {
    id: 14,
    title: 'The Social Network',
    year: 2010,
    description: 'La historia del surgimiento de Facebook y los conflictos que acompañaron su creación.',
    stars: 4.4,
    platform: 'Netflix',
    genre: 'Drama / Biografía',
    img: 'https://i.imgur.com/q2H8jE6.jpeg'
  },
  {
    id: 15,
    title: 'Whiplash',
    year: 2014,
    description: 'Un joven baterista enfrenta a un exigente profesor que lo lleva al límite de su talento.',
    stars: 4.8,
    platform: 'Amazon Prime',
    genre: 'Drama / Música',
    img: 'https://i.imgur.com/ZlwrpRp.jpeg'
  },
  {
    id: 16,
    title: 'Blade Runner 2049',
    year: 2017,
    description: 'Un replicante descubre un secreto que podría cambiar el destino de la humanidad.',
    stars: 4.6,
    platform: 'HBO Max',
    genre: 'Ciencia ficción / Misterio',
    img: 'https://i.imgur.com/koHGEJX.jpeg'
  },
  {
    id: 17,
    title: 'The Dark Knight',
    year: 2008,
    description: 'Batman enfrenta al Joker, un criminal que quiere sumir a Ciudad Gótica en el caos.',
    stars: 4.9,
    platform: 'Netflix',
    genre: 'Acción / Crimen',
    img: 'https://i.imgur.com/8ZTrUko.jpeg'
  },
  {
    id: 18,
    title: 'Oppenheimer',
    year: 2023,
    description: 'La historia del físico J. Robert Oppenheimer y la creación de la bomba atómica.',
    stars: 4.8,
    platform: 'Peacock',
    genre: 'Biografía / Drama',
    img: 'https://i.imgur.com/2ApCLuE.jpeg'
  },
  {
    id: 19,
    title: 'Barbie',
    year: 2023,
    description: 'Barbie viaja al mundo real en una aventura que cuestiona la identidad y la perfección.',
    stars: 4.2,
    platform: 'Max',
    genre: 'Comedia / Fantasía',
    img: 'https://i.imgur.com/zoN9VQ1.jpeg'
  },
  {
    id: 20,
    title: 'Guardians of the Galaxy Vol. 3',
    year: 2023,
    description: 'El equipo enfrenta nuevos peligros mientras Rocket confronta su oscuro pasado.',
    stars: 4.5,
    platform: 'Disney+',
    genre: 'Acción / Ciencia ficción',
    img: 'https://i.imgur.com/mflhTfr.jpeg'
  }
];
