import BookEmptyState from './BookEmptyState'
import BookSection from './BookSection'

function BookCatalog({ books, searchTerm, onOpenBook }) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(normalizedSearchTerm),
  )

  return (
    <div className="walls" aria-label="Books landing sections">
      {filteredBooks.map((book) => (
        <BookSection book={book} key={book.title} onOpen={onOpenBook} />
      ))}

      {filteredBooks.length === 0 ? <BookEmptyState searchTerm={searchTerm} /> : null}
    </div>
  )
}

export default BookCatalog