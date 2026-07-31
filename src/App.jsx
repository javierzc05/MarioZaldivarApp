import './App.css'
import { useEffect, useState } from 'react'
import { books } from './models/Book'
import whatsappIcon from './assets/whatsapp.png'
import BookDetails from './components/BookDetails'

function App() {
  const [activeBook, setActiveBook] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )

  useEffect(() => {
    const imageUrls = Array.from(
      new Set(
        books.flatMap((book) => [book.cover, book.wall]).filter(Boolean),
      ),
    )

    imageUrls.forEach((url) => {
      const image = new Image()
      image.decoding = 'async'
      image.loading = 'eager'
      image.src = url
    })
  }, [])

  const openBookDetails = (book) => {
    setActiveBook(book)
  }

  const closeBookDetails = () => {
    setActiveBook(null)
  }

  if (activeBook) {
    return (
      <main className="landing">
        <BookDetails
          book={activeBook}
          whatsappIcon={whatsappIcon}
          onClose={closeBookDetails}
        />
      </main>
    )
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
        {filteredBooks.map((book) => (
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
    </main>
  )
}

export default App
