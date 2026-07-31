function BookDetails({ book, onClose, whatsappIcon }) {
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
