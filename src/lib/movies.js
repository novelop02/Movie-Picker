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
    img: 'https://www.abirpothi.com/wp-content/uploads/2024/01/small-spos8308-poster-inception-animated-wall-poster-sl-8308-original-imaghzwanmepwc89.webp'
  },
  {
    id: 3,
    title: 'Spirited Away',
    year: 2001,
    description: 'Una niña entra en un mundo mágico de espíritus y debe encontrar la forma de rescatar a sus padres.',
    stars: 4.9,
    platform: 'HBO Max',
    genre: 'Animación / Fantasía',
    img: 'https://www.tallengestore.com/cdn/shop/files/SpiritedAway-HayaoMiyazaki-StudioGhibli-JapaneseAnimationMoviePoster_8718979f-1c9e-48d4-a59c-449685e50014.jpg?v=1733380928'
  },
  {
    id: 4,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    description: 'Las aventuras de un legendario conserje y su joven protegido en un famoso hotel europeo.',
    stars: 4.3,
    platform: 'Hulu',
    genre: 'Comedia / Drama',
    img: 'https://www.thesocietyofthecrossedkeys.com/cdn/shop/products/GBHHorizontal2_984x.jpg?v=1618907630'
  },
  {
    id: 5,
    title: 'Everything Everywhere All at Once',
    year: 2022,
    description: 'Una dueña de lavandería es arrastrada a una aventura multiversal para salvar la existencia.',
    stars: 4.7,
    platform: 'Paramount+',
    genre: 'Ciencia ficción / Acción',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocnzDCZAAUVijaPpjnO59zjIL3r8oVRXVYA&s'
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
    img: 'https://img.englishcinemaparis.com/nKizXKvqQfZzAMBylGXBi7TuU37mFVp7Mb9phhtftSw/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy82MGMzNzFhMy0yNzQyLTQwZWYtYTQwOS1kMzE0NmI0YTNlNDQuanBn.jpg'
  },
  {
    id: 7,
    title: 'La La Land',
    year: 2016,
    description: 'Una actriz y un músico luchan por cumplir sus sueños mientras viven un romance inolvidable.',
    stars: 4.6,
    platform: 'Amazon Prime',
    genre: 'Musical / Romance',
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f8b2ef92655071.5e505bf7132ab.png'
  },
  {
    id: 8,
    title: 'Coco',
    year: 2017,
    description: 'Un niño apasionado por la música viaja al Mundo de los Muertos para descubrir la verdad de su familia.',
    stars: 4.8,
    platform: 'Disney+',
    genre: 'Animación / Familiar',
    img: 'https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg'
  },
  {
    id: 9,
    title: 'The Batman',
    year: 2022,
    description: 'Batman investiga una serie de asesinatos que lo llevan a descubrir una red de corrupción en Ciudad Gótica.',
    stars: 4.5,
    platform: 'HBO Max',
    genre: 'Acción / Crimen',
    img: 'https://preview.redd.it/rdcg5mue1sy71.jpg?auto=webp&s=05854e04c45ad509986a5e5406853cbecf7f38b6'
  },
  {
    id: 10,
    title: 'Dune',
    year: 2021,
    description: 'Un joven noble debe enfrentarse a un destino peligroso en el planeta desértico Arrakis.',
    stars: 4.6,
    platform: 'HBO Max',
    genre: 'Ciencia ficción / Aventura',
    img: 'https://cdnb.artstation.com/p/assets/images/images/037/636/465/large/andres-mencia-e6d693ce-a635-425f-811b-9354846b0e31-rw-1920.jpg?1620903148'
  },
  {
    id: 11,
    title: 'Avatar',
    year: 2009,
    description: 'Un soldado parapléjico se integra a una tribu alienígena y lucha por defender su hogar.',
    stars: 4.3,
    platform: 'Disney+',
    genre: 'Ciencia ficción / Aventura',
    img: 'https://lumiere-a.akamaihd.net/v1/images/avatar-twow-videobg02_fae5d62e.jpeg?region=0,0,1920,1080&width=768'
  },
  {
    id: 12,
    title: 'Pulp Fiction',
    year: 1994,
    description: 'Varias historias criminales se cruzan en un cóctel caótico lleno de humor negro y violencia.',
    stars: 4.7,
    platform: 'Amazon Prime',
    genre: 'Crimen / Drama',
    img: 'https://i.pinimg.com/736x/9e/96/fd/9e96fdae2f6b383e60ffaa610dbdffd0.jpg'
  },
  {
    id: 13,
    title: 'Mad Max: Fury Road',
    year: 2015,
    description: 'En un desierto postapocalíptico, una mujer rebelde se une a un fugitivo para escapar de un tirano.',
    stars: 4.8,
    platform: 'HBO Max',
    genre: 'Acción / Ciencia ficción',
    img: 'https://m.media-amazon.com/images/I/81J6CaUe+GL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 14,
    title: 'The Social Network',
    year: 2010,
    description: 'La historia del surgimiento de Facebook y los conflictos que acompañaron su creación.',
    stars: 4.4,
    platform: 'Netflix',
    genre: 'Drama / Biografía',
    img: 'https://sobrosnetwork.com/wp-content/uploads/2023/10/the-social-network-1024x576.jpg'
  },
  {
    id: 15,
    title: 'Whiplash',
    year: 2014,
    description: 'Un joven baterista enfrenta a un exigente profesor que lo lleva al límite de su talento.',
    stars: 4.8,
    platform: 'Amazon Prime',
    genre: 'Drama / Música',
    img: 'https://cinescopia.com/wp-content/uploads/2015/01/Whiplash-Movie-Images.jpg'
  },
  {
    id: 16,
    title: 'Blade Runner 2049',
    year: 2017,
    description: 'Un replicante descubre un secreto que podría cambiar el destino de la humanidad.',
    stars: 4.6,
    platform: 'HBO Max',
    genre: 'Ciencia ficción / Misterio',
    img: 'https://cdn.europosters.eu/image/750/50060.jpg'
  },
  {
    id: 17,
    title: 'The Dark Knight',
    year: 2008,
    description: 'Batman enfrenta al Joker, un criminal que quiere sumir a Ciudad Gótica en el caos.',
    stars: 4.9,
    platform: 'Netflix',
    genre: 'Acción / Crimen',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZfKfxlc4n58CHTOXkHq675RBC87jxBdcfQ&s'
  },
  {
    id: 18,
    title: 'Oppenheimer',
    year: 2023,
    description: 'La historia del físico J. Robert Oppenheimer y la creación de la bomba atómica.',
    stars: 4.8,
    platform: 'Peacock',
    genre: 'Biografía / Drama',
    img: 'https://cdnb.artstation.com/p/assets/images/images/078/442/485/large/huzi7-oppenheimer-landscape.jpg?1722115669'
  },
  {
    id: 19,
    title: 'Barbie',
    year: 2023,
    description: 'Barbie viaja al mundo real en una aventura que cuestiona la identidad y la perfección.',
    stars: 4.2,
    platform: 'Max',
    genre: 'Comedia / Fantasía',
    img: 'https://sm.ign.com/ign_latam/news/b/barbie-mov/barbie-movie-posters-reveal-more-barbies-kens-and-separately_8n35.jpg'
  },
  {
    id: 20,
    title: 'Guardians of the Galaxy Vol. 3',
    year: 2023,
    description: 'El equipo enfrenta nuevos peligros mientras Rocket confronta su oscuro pasado.',
    stars: 4.5,
    platform: 'Disney+',
    genre: 'Acción / Ciencia ficción',
    img: 'https://images3.alphacoders.com/132/1321665.jpg'
  }
];
