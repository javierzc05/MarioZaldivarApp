import { toSlug } from '../utils/bookRouting'

function BookSection({ book, onOpen }) {
  return (
    <section
      className="wall-section"
      id={toSlug(book.title)}
      style={{ backgroundImage: `url(${book.wall})` }}
      onClick={() => onOpen(book)}
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
            onOpen(book)
          }}
        >
          Comprar Libro
        </button>
      </div>
    </section>
  )
}

export default BookSection