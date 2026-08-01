// Walls
import gilberto_hernandez_wall from '../../assets/gilberto_hernandez_wall.png'
import ricardo_mora_wall from '../../assets/ricardo_mora_wall.png'
import julita_cortes_wall from '../../assets/julita_cortes_wall.png'
import canciones_y_lugares_wall from '../../assets/canciones_y_lugares_wall.png'
import costarricenses_en_la_musica_wall from '../../assets/costarricenses_en_la_musica_wall.png'
import cronicas_de_la_musica_popular_cr_wall from '../../assets/cronicas_de_la_musica_popular_cr_wall.png'
import imagenes_de_la_musica_popular_cr_wall from '../../assets/imagenes_de_la_musica_popular_cr_wall.png'
import lubin_barahona_wall from '../../assets/lubin_barahona_wall.png'
import ray_tico_wall from '../../assets/ray_tico_wall.png'
import rafa_perez_wall from '../../assets/rafa_perez_wall.png'
import otto_vargas_wall from '../../assets/otto_vargas_wall.png'
import aquellos_salones_de_baile_wall from '../../assets/aquellos_salones_de_baile_wall.png'
import mario_chacon_wall from '../../assets/mario_chacon_wall.png'
import tu_nombre_tiene_musica_wall from '../../assets/tu_nombre_tiene_musica_wall.png'

// Covers
import gilberto_hernandez_cover from '../../assets/gilberto_hernandez_cover.jpg'
import ricardo_mora_cover from '../../assets/ricardo_mora_cover.jpg'
import julita_cortes_cover from '../../assets/julita_cortes_cover.jpg'
import canciones_y_lugares_cover from '../../assets/canciones_y_lugares_cover.jpg'
import costarricenses_en_la_musica_cover from '../../assets/costarricenses_en_la_musica_cover.jpg'
import cronicas_de_la_musica_popular_cr_cover from '../../assets/cronicas_de_la_musica_popular_cr_cover.jpg'
import imagenes_de_la_musica_popular_cr_cover from '../../assets/imagenes_de_la_musica_popular_cr_cover.jpg'
import lubin_barahona_cover from '../../assets/lubin_barahona_cover.jpg'
import ray_tico_cover from '../../assets/ray_tico_cover.jpg'
import rafa_perez_cover from '../../assets/rafa_perez_cover.jpg'
import otto_vargas_cover from '../../assets/otto_vargas_cover.jpg'
import aquellos_salones_de_baile_cover from '../../assets/aquellos_salones_de_baile_cover.jpg'
import mario_chacon_cover from '../../assets/mario_chacon_cover.jpg'
import tu_nombre_tiene_musica_cover from '../../assets/tu_nombre_tiene_musica_cover.jpg'

const standardPrice = '₡10 000'

export const books = [
  {
    title: 'Tu nombre tiene música',
    tag: 'Recopilación',
    description:
        'Tu nombre tiene música es un libro que reúne la historia de 180 canciones con nombres femeninos y masculinos. Desde María bonita a Juan charrasqueado, desde Rosa a Pedro nadie, de Ana hasta Juanita bonita, la historia discográfica del mundo se ha enriquecido con los nombres propios de la humanidad.',
    price: standardPrice,
    wall: tu_nombre_tiene_musica_wall,
    cover: tu_nombre_tiene_musica_cover,
    coverAlign: 'left',
  },
  {
    title: 'Aquellos salones de baile',
    tag: 'Historia',
    description:
        'Aquellos salones de baile es un libro que reúne la historia de más de 300 salas de baile del país, de las cuales quedan muy pocas. Esta es la recopilación más completa de la tradición bailable más importante del país.',
    price: standardPrice,
    wall: aquellos_salones_de_baile_wall,
    cover: aquellos_salones_de_baile_cover,
    coverAlign: 'right',
  },
  {
    title: 'Crónicas de la música popular costarricense',
    tag: 'Historia',
    description:
      'Crónicas de la Música Popular Costarricense es un libro que recoge 67 reseñas de las agrupaciones musicales más destacadas del país, originalmente publicadas en el suplemento Áncora de La Nación. El libro fue publicado con el apoyo financiero del Ministerio de Cultura.',
    price: standardPrice,
    wall: cronicas_de_la_musica_popular_cr_wall,
    cover: cronicas_de_la_musica_popular_cr_cover,
    coverAlign: 'left',
  },
  {
    title: 'Canciones y Lugares',
    tag: 'Recopilación',
    description:
      'Canciones y Lugares es un libro que reúne la historia de 180 canciones que llevan el nombre de ciudades, países, ríos, montes, edificios, calles y avenidas de merecida fama de todo el planeta. Cada pieza arrastra anécdotas, autores, rastro cinematográfico, discográfico y hasta intimidades de los artistas involucrados.',
    price: standardPrice,
    wall: canciones_y_lugares_wall,
    cover: canciones_y_lugares_cover,
    coverAlign: 'right',
  },
  {
    title: 'Gilberto Hernandez',
    tag: 'Biografía',
    description:
      'Gilberto Hernández es el cantor tico más importante del bolero de corte arrabalero, una corriente que ha hecho historia en toda la región. Su estilo interpretativo le ha valido el reconocimiento de varias generaciones. Hizo muchas giras a Norte y Sur América, donde aún goza de merecido prestigio',
    price: standardPrice,
    wall: gilberto_hernandez_wall,
    cover: gilberto_hernandez_cover,
    coverAlign: 'left',
  },
  {
    title: 'Ricardo Mora',
    tag: 'Biografía',
    description:
      'Ricardo Mora fue el compositor de boleros más importante de la música popular costarricense, dueño de un sentido melódico extraordinario. Tuvo la satisfacción de que grandes cantantes del continente grabaran sus canciones',
    price: standardPrice,
    wall: ricardo_mora_wall,
    cover: ricardo_mora_cover,
    coverAlign: 'right',
  },
  {
    title: 'Julita Cortes',
    tag: 'Biografía',
    description:
      'Julia Cortés es la única artista costarricense que ha triunfado en París y que ha vendido millones de discos en todo el mundo, como voz prima del trío Los Machucambos. Su desempeño en el arte musical no ha sido superado hasta la fecha.',
    price: standardPrice,
    wall: julita_cortes_wall,
    cover: julita_cortes_cover,
    coverAlign: 'left',
  },
  {
    title: 'Mario Chacón',
    tag: 'Biografía',
    description:
        'Mario Chacón es un cantante y compositor costarricense que ha logrado trascender en la música popular de Costa Rica, gracias a su estilo interpretativo y a la calidad de sus composiciones. Su carrera artística ha sido reconocida con varios premios y distinciones.',
    price: standardPrice,
    wall: mario_chacon_wall,
    cover: mario_chacon_cover,
    coverAlign: 'right',
  },
  {
    title: 'Ray Tico',
    tag: 'Biografía',
    description:
      'Ray Tico es el cantante costarricense de mayor proyección internacional, gracias a su extensa carrera en diferentes países de América Latina, sobre todo en Cuba, a mitad de los años 50, cuando esta república era la meca de la música popular de la región.',
    price: standardPrice,
    wall: ray_tico_wall,
    cover: ray_tico_cover,
    coverAlign: 'left',
  },
  {
    title: 'Lubin Barahona',
    tag: 'Biografía',
    description:
      'La orquesta de Lubín Barahona inició su labor artística desde los años 40 del siglo pasado y también fue una de las primeras agrupaciones musicales que hicieron giras a Centro y Sur América. Aún activa, se cuenta entre las orquestas de gran porte más antiguas de América.',
    price: standardPrice,
    wall: lubin_barahona_wall,
    cover: lubin_barahona_cover,
    coverAlign: 'right',
  },
  {
    title: 'Rafa Pérez',
    tag: 'Biografía',
    description:
      'Rafa Pérez fue el bolerista clásico de Costa Rica, poseedor de una voz privilegiada y un estilo muy original, que lo convirtió en el primer ídolo nacional de la música popular de mediados del siglo XX.',
    price: standardPrice,
    wall: rafa_perez_wall,
    cover: rafa_perez_cover,
    coverAlign: 'left',
  },
  {
    title: 'Otto Vargas',
    tag: 'Biografía',
    description:
      'Otto Vargas fue un exitoso compositor, saxofonista y director de orquesta que tuvo a su favor una enorme legión de seguidores y además, marcó una época entre los bailadores del país, gracias a la calidad del sonido de su agrupación.',
    price: standardPrice,
    wall: otto_vargas_wall,
    cover: otto_vargas_cover,
    coverAlign: 'right'
  },
  {
    title: 'Costarricenses en la música',
    tag: 'Historia',
    description:
      'Costarricenses en la música es un libro que reúne 27 entrevistas a los más grandes cantantes, músicos, compositores y directores de orquesta de la música popular costarricense de mitad del siglo XX. Esta generación marcó la historia del arte musical del país.',
    price: standardPrice,
    wall: costarricenses_en_la_musica_wall,
    cover: costarricenses_en_la_musica_cover,
    coverAlign: 'left',
  },
  {
    title: 'Imágenes de la música popular costarricense',
    tag: 'Historia',
    description:
        'Imágenes de la Música Popular Costarricense es un libro que contiene más de 160 fotografías de orquestas, cantantes y salas de baile de la Costa Rica de mitad del siglo XX. Este es un archivo gráfico de los grandes protagonistas de nuestra música popular.',
    price: standardPrice,
    wall: imagenes_de_la_musica_popular_cr_wall,
    cover: imagenes_de_la_musica_popular_cr_cover,
    coverAlign: 'right',
  }
]
