import './App.css'
import { useEffect, useState } from 'react'
import { books } from './models/Book'
import whatsappIcon from './assets/whatsapp.png'
import facebookIcon from './assets/facebook.png'
import instagramIcon from './assets/instagram.png'

function App() {
  const [activeBook, setActiveBook] = useState(books[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )

  useEffect(() => {
    if (!isModalOpen) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  const openBookDetails = (book) => {
    setActiveBook(book)
    setIsModalOpen(true)
  }

  return (
    <main className="landing">
      <header className="site-header">
        <div className="header-copy">
          <p>Mario Zaldívar</p>

          <label className="header-filter" htmlFor="book-filter-input">
            <input
              id="book-filter-input"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por titulo"
            />
          </label>
        </div>

        <h1>Libros publicados</h1>
      </header>

      <div className="walls" aria-label="Books landing sections">
        {filteredBooks.map((book, index) => (
          <section className="wall-section" key={book.title} style={{ backgroundImage: `url(${book.wall})` }}>
            <div className="wall-overlay" />
            <div
              className={`wall-content wall-content--${book.coverAlign === 'left' ? 'right' : 'left'}`}
            >
              <h2>{book.title}</h2>
              <p className="wall-tag">{book.tag}</p>
              <p className="wall-description">{book.description}</p>
              <p className="wall-price">Precio: {book.price}</p>
              <button type="button" className="details-button" onClick={() => openBookDetails(book)}>
                Comprar Libro
              </button>
            </div>
          </section>
        ))}

        {filteredBooks.length === 0 ? (
          <section className="wall-empty" aria-live="polite">
            <p>No se encontraron libros para "{searchTerm}".</p>
          </section>
        ) : null}
      </div>

      {isModalOpen ? (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close book details"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="modal-grid">
              <div className="modal-main">
                <p className="modal-label">Detalles del libro</p>
                <h2 id="book-modal-title">{activeBook.title}</h2>

                <img
                  className="modal-cover"
                  src={activeBook.cover ?? activeBook.wall}
                  alt={`${activeBook.title} cover`}
                />

                <p className="modal-tag">{activeBook.tag}</p>
                <p className="modal-price">Precio: {activeBook.price}</p>
                <p className="modal-description">{activeBook.description}</p>
             
              </div>

              <div className="modal-actions" aria-label="Contact actions">
                <a
                  className="contact-button whatsapp"
                  href={`https://wa.me/50689217025?text=Hola%2C%20quiero%20adquirir%20el%20libro%20de%20${encodeURIComponent(activeBook.title)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="contact-icon" src={whatsappIcon} alt="" aria-hidden="true" />
                  Comprar por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  )
}

export default App
