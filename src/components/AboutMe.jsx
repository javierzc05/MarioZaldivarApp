import aboutMePhoto from '../assets/mario_zaldivar_about_me.jpeg'

function AboutMe({ onClose }) {
  return (
    <article className="about-me-page" aria-label="About me page">
      <div className="about-me-shell">
        <header className="about-me-header">
          <button type="button" className="about-me-back" onClick={onClose}>
            Volver
          </button>
        </header>

        <article className="about-me-content" id="about-me" aria-labelledby="about-me-title">
          <img className="about-me-photo" src={aboutMePhoto} alt="Mario Zaldívar" />

          <div className="about-me-copy">
            <h1 id="about-me-title">Mario Zaldívar</h1>
            <p>
              Mario Zaldívar nació en San José en 1954. Hizo estudios de licenciatura en Ciencias
              Económicas, con énfasis en Administración Pública, en la Universidad de Costa Rica y de
              Maestría en la misma especialidad en la Fundación Getúlio Vargas de Río de Janeiro,
              Brasil. Entre 1975 y el 2015 laboró en el campo del Crédito Educativo, primero en la
              gerencia de la Comisión Nacional de Préstamos para Educación, CONAPE, y después como
              Consultor Internacional en la Asociación Panamericana de Instituciones de Crédito
              Educativo, APICE, de Colombia. En esa actividad publicó cuatro libros. En 1996 APICE le
              concedió la Cruz de Plata y en el 2007 la Cruz de Oro del Crédito Educativo
              Latinoamericano.
            </p>
            <p>
              A partir de 1994 incursionó en el área de ficción, concretamente en la novela. En ese
              año ganó el Premio de Novela Editorial Costa Rica, con la obra "Ahora juega usted señor
              Capablanca". En el 2001 ganó el Premio Nacional de Novela Aquileo Echeverría con el
              libro "Después de la luz roja".
            </p>
            <p>
              A partir del año 2003 inició la publicación de diversos textos sobre la Historia de la
              Música Popular Costarricense, considerando biografías de cantantes, compositores,
              músicos y orquestas nacionales. Paralelamente publicó otros libros sobre salones de
              baile, cantinas antiguas, canciones icónicas de nuestro cancionero popular y otros textos
              sobre Música Popular Latinoamericana. En el año 2018 le fue concedida la Presea de Oro
              Internacional Ray Tico por sus investigaciones y publicaciones en esta especialidad.
              Actualmente está jubilado, trabajando en la investigación musical y en la pintura
              surrealista.
            </p>
          </div>
        </article>
      </div>
    </article>
  )
}

export default AboutMe
