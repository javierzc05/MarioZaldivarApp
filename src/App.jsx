import './App.css'
import { useEffect, useState } from 'react'
import { books } from './models/Book'
import whatsappIcon from './assets/whatsapp.png'
import BookDetails from './components/BookDetails'
import AboutMe from './components/AboutMe'

const SKELETON_DURATION_MS = 1500

const toSlug = (title) =>
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const findBookBySlug = (slug) => books.find((book) => toSlug(book.title) === slug)

const getBookFromHash = () => {
  const match = window.location.hash.match(/^#\/book\/([^/?#]+)/)

  if (!match) {
    return null
  }

  const slug = decodeURIComponent(match[1])
  return findBookBySlug(slug) ?? null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeBook, setActiveBook] = useState(null)
  const [bookToFocus, setBookToFocus] = useState(null)
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, SKELETON_DURATION_MS)

    return () => window.clearTimeout(loadingTimer)
  }, [])

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

  useEffect(() => {
    const syncBookFromLocation = () => {
      const bookFromHash = getBookFromHash()

      setActiveBook(bookFromHash)

      if (!bookFromHash && window.history.state?.bookSlug) {
        setBookToFocus(window.history.state.bookSlug)
      }
    }

    syncBookFromLocation()
    window.addEventListener('popstate', syncBookFromLocation)

    return () => {
      window.removeEventListener('popstate', syncBookFromLocation)
    }
  }, [])

  const openBookDetails = (book) => {
    const bookSlug = toSlug(book.title)
    window.history.pushState({ bookSlug }, '', `#/book/${encodeURIComponent(bookSlug)}`)
    window.sessionStorage.setItem('lastBookSlug', bookSlug)
    setActiveBook(book)
  }

  const openAboutMe = () => {
    setShowAboutMe(true)
    setActiveBook(null)
  }

  const closeBookDetails = () => {
    if (window.history.state?.bookSlug) {
      window.history.back()
      return
    }

    setBookToFocus(activeBook ? toSlug(activeBook.title) : window.sessionStorage.getItem('lastBookSlug'))
    window.location.hash = ''
    setActiveBook(null)
  }

  const closeAboutMe = () => {
    setShowAboutMe(false)
  }

  useEffect(() => {
    if (activeBook || !bookToFocus) {
      return
    }

    const targetId = bookToFocus
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const resetFocusFrame = window.requestAnimationFrame(() => {
      setBookToFocus(null)
    })

    return () => window.cancelAnimationFrame(resetFocusFrame)
  }, [activeBook, bookToFocus])

  if (isLoading) {
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

  if (showAboutMe) {
    return (
      <main className="landing">
        <AboutMe onClose={closeAboutMe} />
      </main>
    )
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
          <a
            href="#about-me"
            className="about-me"
            onClick={(event) => {
              event.preventDefault()
              openAboutMe()
            }}
          >
            Mario Zaldívar
          </a>

          <label className="header-filter" htmlFor="book-filter-input">
            <input
              id="book-filter-input"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por título"
            />
          </label>
        </div>

        <h1>Libros publicados</h1>
      </header>

      <div className="walls" aria-label="Books landing sections">
        {filteredBooks.map((book) => (
          <section
            className="wall-section"
            key={book.title}
            id={toSlug(book.title)}
            style={{ backgroundImage: `url(${book.wall})` }}
            onClick={() => openBookDetails(book)}
          >
            <div className="wall-overlay" />
            <div
              className={`wall-content wall-content--${book.coverAlign === 'left' ? 'right' : 'left'}`}
            >
              <h2>{book.title}</h2>
              <p className="wall-tag">{book.tag}</p>
              <p className="wall-description">{book.description}</p>
              <p className="wall-price">Precio: {book.price}</p>
              <button
                type="button"
                className="details-button"
                onClick={(event) => {
                  event.stopPropagation()
                  openBookDetails(book)
                }}
              >
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
