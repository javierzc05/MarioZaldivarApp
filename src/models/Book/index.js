// Walls
import gilbertoHernandezWall from '../../assets/gilberto_hernandez_wall.png'
import ricardoMoraWall from '../../assets/ricardo_mora_wall.png'
import julitaCortesWall from '../../assets/julita_cortes_wall.png'
import cancionesYLugaresWall from '../../assets/canciones_y_lugares_wall.png'
import ray_tico_wall from '../../assets/ray_tico_wall.png'
import rafa_perez_wall from '../../assets/rafa_perez_wall.png'
import otto_vargas_wall from '../../assets/otto_vargas_wall.png'
import aquellos_salones_de_baile_wall from '../../assets/aquellos_salones_de_baile_wall.png'
import mario_chacon_wall from '../../assets/mario_chacon_wall.png'

// Covers
import gilbertoHernandezCover from '../../assets/gilberto_hernandez_cover.jpg'
import ricardoMoraCover from '../../assets/ricardo_mora_cover.jpg'
import julitaCortesCover from '../../assets/julita_cortes_cover.jpg'
import cancionesYLugaresCover from '../../assets/canciones_y_lugares_cover.jpg'
import ray_tico_cover from '../../assets/ray_tico_cover.jpg'
import rafa_perez_cover from '../../assets/rafa_perez_cover.jpg'
import otto_vargas_cover from '../../assets/otto_vargas_cover.jpg'
import aquellos_salones_de_baile_cover from '../../assets/aquellos_salones_de_baile_cover.jpg'
import mario_chacon_cover from '../../assets/mario_chacon_cover.jpg'

const standardPrice = '₡10 000'

export const books = [
  {
    title: 'Gilberto Hernandez',
    tag: 'Biografía',
    description:
      'Gilberto Hernández es el cantor tico más importante del bolero de corte arrabalero, una corriente que ha hecho historia en toda la región. Su estilo interpretativo le ha valido el reconocimiento de varias generaciones. Hizo muchas giras a Norte y Sur América, donde aún goza de merecido prestigio',
    price: standardPrice,
    wall: gilbertoHernandezWall,
    cover: gilbertoHernandezCover,
    coverAlign: 'left',
  },
  {
    title: 'Ricardo Mora',
    tag: 'Biografía',
    description:
      'Ricardo Mora fue el compositor de boleros más importante de la música popular costarricense, dueño de un sentido melódico extraordinario. Tuvo la satisfacción de que grandes cantantes del continente grabaran sus canciones',
    price: standardPrice,
    wall: ricardoMoraWall,
    cover: ricardoMoraCover,
    coverAlign: 'right',
  },
  {
    title: 'Julita Cortes',
    tag: 'Biografía',
    description:
      'Julia Cortés es la única artista costarricense que ha triunfado en París y que ha vendido millones de discos en todo el mundo, como voz prima del trío Los Machucambos. Su desempeño en el arte musical no ha sido superado hasta la fecha.',
    price: standardPrice,
    wall: julitaCortesWall,
    cover: julitaCortesCover,
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
    title: 'Canciones y Lugares',
    tag: 'Recopilación',
    description:
      'Canciones y Lugares es un libro que reúne la historia de 180 canciones que llevan el nombre de ciudades, países, ríos, montes, edificios, calles y avenidas de merecida fama de todo el planeta. Cada pieza arrastra anécdotas, autores, rastro cinematográfico, discográfico y hasta intimidades de los artistas involucrados.',
    price: standardPrice,
    wall: cancionesYLugaresWall,
    cover: cancionesYLugaresCover,
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
    coverAlign: 'left'
  }
]
