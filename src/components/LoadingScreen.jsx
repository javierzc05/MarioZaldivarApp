function LoadingScreen() {
  return (
    <main className="skeleton-page" aria-busy="true" aria-label="Cargando contenido">
      <span className="sr-only" role="status">Cargando libros publicados</span>
      <header className="skeleton-header">
        <div className="skeleton-line skeleton-line--author" />
        <div className="skeleton-line skeleton-line--search" />
        <div className="skeleton-line skeleton-line--title" />
      </header>
      <div className="skeleton-books" aria-hidden="true">
        {[0, 1].map((item) => (
          <section className="skeleton-book" key={item}>
            <div className="skeleton-book-copy">
              <div className="skeleton-line skeleton-line--book-title" />
              <div className="skeleton-line skeleton-line--text" />
              <div className="skeleton-line skeleton-line--text-short" />
              <div className="skeleton-line skeleton-line--button" />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default LoadingScreen