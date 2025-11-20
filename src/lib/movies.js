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
  },

  /* ================================
     20 NUEVAS PELÍCULAS EXTRA
     ================================ */

  {
    id: 21,
    title: 'Shrek 2',
    year: 2004,
    description: 'Shrek y Fiona visitan Muy Muy Lejano, donde enfrentan a la Hada Madrina y al Príncipe Encantador.',
    stars: 4.7,
    platform: 'Netflix',
    genre: 'Animación / Comedia',
    img: 'https://wallpapers.com/images/hd/shrek-2-poster-main-cast-1n0p7vu78dwbr3m0.jpg'
  },
  {
    id: 22,
    title: 'The Matrix',
    year: 1999,
    description: 'Un hacker descubre la verdad sobre la realidad y se une a la resistencia contra las máquinas.',
    stars: 4.8,
    platform: 'HBO Max',
    genre: 'Ciencia ficción / Acción',
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26a479c4-486a-41a1-8d5a-30a3769b104d/dfi6ui6-4dfddcec-0c7f-468a-a05e-b034f3a27282.png/v1/fill/w_1185,h_674,q_70,strp/the_matrix__1999__wallpaper_by_stephen_fisher_dfi6ui6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MiIsInBhdGgiOiIvZi8yNmE0NzljNC00ODZhLTQxYTEtOGQ1YS0zMGEzNzY5YjEwNGQvZGZpNnVpNi00ZGZkZGNlYy0wYzdmLTQ2OGEtYTA1ZS1iMDM0ZjNhMjcyODIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RzryS-efmm9Di4cuVWpb6D8X6ZNmJ1sTSHscelVb3UQ'
  },
  {
    id: 23,
    title: 'The Lion King',
    year: 1994,
    description: 'Simba debe reclamar su lugar como rey tras la traición de su tío Scar.',
    stars: 4.9,
    platform: 'Disney+',
    genre: 'Animación / Familiar',
    img: 'https://lifestylewithsarah.com/wp-content/uploads/2019/07/lion-king-poster.jpg?w=582&h=328'
  },
  {
    id: 24,
    title: 'Parasite',
    year: 2019,
    description: 'Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.',
    stars: 4.8,
    platform: 'Hulu',
    genre: 'Drama / Suspenso',
    img: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/03/IMG_3746-scaled.jpeg'
  },
  {
    id: 25,
    title: 'Joker',
    year: 2019,
    description: 'Arthur Fleck, un hombre ignorado por la sociedad, inicia un camino hacia la locura y la violencia.',
    stars: 4.7,
    platform: 'HBO Max',
    genre: 'Drama / Crimen',
    img: 'https://ntvb.tmsimg.com/assets/p15791706_v_h8_ai.jpg?w=1280&h=720'
  },
  {
    id: 26,
    title: 'Toy Story',
    year: 1995,
    description: 'Woody y Buzz comienzan una amistad llena de aventuras en un mundo donde los juguetes tienen vida.',
    stars: 4.8,
    platform: 'Disney+',
    genre: 'Animación / Familiar',
    img: 'https://i.pinimg.com/736x/ee/dd/a2/eedda282cce0908addaea7c7cdb85c5b.jpg'
  },
  {
    id: 27,
    title: 'The Shawshank Redemption',
    year: 1994,
    description: 'Dos prisioneros forman una amistad mientras buscan esperanza dentro de una cárcel opresiva.',
    stars: 5.0,
    platform: 'Netflix',
    genre: 'Drama',
    img: 'https://myhotposters.com/cdn/shop/products/mHP0131_1024x1024.jpeg?v=1748542019'
  },
  {
    id: 28,
    title: 'Finding Nemo',
    year: 2003,
    description: 'Un pez payaso viaja por el océano para rescatar a su hijo perdido.',
    stars: 4.7,
    platform: 'Disney+',
    genre: 'Animación / Aventura',
    img: 'https://i.pinimg.com/736x/40/36/da/4036da77a71f34a1db1b2d5f6b79a4d9.jpg'
  },
  {
    id: 29,
    title: 'The Avengers',
    year: 2012,
    description: 'Los héroes más poderosos de la Tierra se unen para detener una invasión alienígena.',
    stars: 4.5,
    platform: 'Disney+',
    genre: 'Acción / Ciencia ficción',
    img: 'https://i.pinimg.com/736x/a3/77/e7/a377e72a833f88a48089489ea5acddc0.jpg'
  },
  {
    id: 30,
    title: 'Forrest Gump',
    year: 1994,
    description: 'La vida extraordinaria de un hombre sencillo que presencia grandes momentos históricos.',
    stars: 4.9,
    platform: 'Netflix',
    genre: 'Drama / Romance',
    img: 'https://m.media-amazon.com/images/I/61z62YqWV5L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: 31,
    title: 'Frozen',
    year: 2013,
    description: 'Elsa desata un invierno eterno por accidente y su hermana Anna intenta salvar el reino.',
    stars: 4.6,
    platform: 'Disney+',
    genre: 'Animación / Fantasía',
    img: 'https://images7.alphacoders.com/112/1120950.jpg'
  },
  {
    id: 32,
    title: 'The Wolf of Wall Street',
    year: 2013,
    description: 'Jordan Belfort asciende en el mundo de las finanzas rodeado de excesos y corrupción.',
    stars: 4.7,
    platform: 'Amazon Prime',
    genre: 'Biografía / Drama',
    img: 'https://ntvb.tmsimg.com/assets/p9991602_v_h8_af.jpg?w=960&h=540'
  },
  {
    id: 33,
    title: 'The Hunger Games',
    year: 2012,
    description: 'Katniss Everdeen lucha por sobrevivir en un mortal reality show televisado.',
    stars: 4.4,
    platform: 'Hulu',
    genre: 'Acción / Ciencia ficción',
    img: 'https://w0.peakpx.com/wallpaper/442/927/HD-wallpaper-the-hunger-games-movie-01.jpg'
  },
  {
    id: 34,
    title: 'Tenet',
    year: 2020,
    description: 'Un agente debe salvar al mundo utilizando una técnica que invierte el flujo del tiempo.',
    stars: 4.3,
    platform: 'HBO Max',
    genre: 'Acción / Ciencia ficción',
    img: 'https://images.squarespace-cdn.com/content/v1/5e1f0187d17eee43e64faa27/1597332912040-356IGUJLZ314MXR1NX5K/tenet-movie-poster-01-700x400-1.jpg'
  },
  {
    id: 35,
    title: 'The Truman Show',
    year: 1998,
    description: 'Un hombre descubre que toda su vida ha sido parte de un programa de televisión.',
    stars: 4.8,
    platform: 'Paramount+',
    genre: 'Drama / Ciencia ficción',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZCiHMcT2ck7npdaPADg7t18l2F-B2Hcgiw&s'
  },
  {
    id: 36,
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    description: 'Miles Morales se convierte en Spider-Man mientras conoce a versiones alternas del héroe.',
    stars: 4.9,
    platform: 'Netflix',
    genre: 'Animación / Acción',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnuxisNoUaYsOd56WVTzSkioQ1DLJwEVQew&s'
  },
  {
    id: 37,
    title: 'The Conjuring',
    year: 2013,
    description: 'Los Warren investigan actividades paranormales en una casa poseída.',
    stars: 4.4,
    platform: 'HBO Max',
    genre: 'Terror / Suspenso',
    img: 'https://ntvb.tmsimg.com/assets/p9379266_v_h10_ab.jpg?w=960&h=540'
  },
  {
    id: 38,
    title: 'The Notebook',
    year: 2004,
    description: 'Un amor joven enfrenta obstáculos sociales y el paso del tiempo.',
    stars: 4.5,
    platform: 'Netflix',
    genre: 'Romance / Drama',
    img: 'https://visitboise.com/wp-content/uploads/2024/07/the-notebook.jpg'
  },
  {
    id: 39,
    title: 'Jurassic Park',
    year: 1993,
    description: 'Un parque temático de dinosaurios pierde el control cuando las criaturas escapan.',
    stars: 4.7,
    platform: 'Amazon Prime',
    genre: 'Aventura / Ciencia ficción',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyBKGpWmtaskThT7UnWXLTVZH2I1d4krfLA&s'
  },
  {
    id: 40,
    title: 'The Prestige',
    year: 2006,
    description: 'Dos magos rivales llevan su obsesión a un nivel mortal tratando de superarse.',
    stars: 4.8,
    platform: 'Hulu',
    genre: 'Drama / Misterio',
    img: 'https://images8.alphacoders.com/112/1121403.jpg'
  }
];
