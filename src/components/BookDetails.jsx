import { useEffect, useState } from 'react'

const DETAILS_SKELETON_DURATION_MS = 1200
const DETAILS_VISITED_SESSION_KEY = 'bookDetailsVisited'

function BookDetails({ book, onClose, whatsappIcon }) {
  const [isLoading, setIsLoading] = useState(
    () => window.sessionStorage.getItem(DETAILS_VISITED_SESSION_KEY) !== 'true',
  )

  useEffect(() => {
    if (!isLoading) {
      return
    }

    window.sessionStorage.setItem(DETAILS_VISITED_SESSION_KEY, 'true')

    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, DETAILS_SKELETON_DURATION_MS)

    return () => window.clearTimeout(loadingTimer)
  }, [isLoading])

  if (isLoading) {
    return (
      <section
        className="book-details-page"
        aria-busy="true"
        aria-label="Cargando detalles del libro"
      >
        <span className="sr-only" role="status">Cargando detalles del libro</span>
        <div className="book-details-shell" aria-hidden="true">
          <header className="book-details-header">
            <div className="skeleton-line details-skeleton-back" />
            <div className="skeleton-line details-skeleton-kicker" />
          </header>

          <div className="book-details-content details-skeleton-content">
            <div className="details-skeleton-cover" />
            <div className="details-skeleton-copy">
              <div className="skeleton-line details-skeleton-title" />
              <div className="skeleton-line details-skeleton-tag" />
              <div className="skeleton-line details-skeleton-price" />
              <div className="skeleton-line details-skeleton-text" />
              <div className="skeleton-line details-skeleton-text" />
              <div className="skeleton-line details-skeleton-text-short" />
              <div className="skeleton-line details-skeleton-action" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="book-details-page" aria-label="Book details page">
      <div className="book-details-shell">
        <header className="book-details-header">
          <button
            type="button"
            className="book-details-back"
            aria-label="Volver al listado"
            onClick={onClose}
          >
            Volver
          </button>
          <p className="book-details-kicker">Detalles del libro</p>
        </header>

        <article className="book-details-content" aria-labelledby="book-details-title">
          <img
            className="book-details-cover"
            src={book.cover ?? book.wall}
            alt={`${book.title} cover`}
          />

          <div className="book-details-copy">
            <h1 id="book-details-title">{book.title}</h1>
            <p className="book-details-tag">{book.tag}</p>
            <p className="book-details-price">Precio: {book.price}</p>
            <p className="book-details-description">{book.description}</p>

            <div className="book-details-actions" aria-label="Contact actions">
              <a
                className="contact-button whatsapp"
                href={`https://wa.me/50689217025?text=Hola%2C%20quiero%20adquirir%20el%20libro%20de%20${encodeURIComponent(book.title)}`}
                target="_blank"
                rel="noreferrer"
              >
                <img className="contact-icon" src={whatsappIcon} alt="" aria-hidden="true" />
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BookDetails
