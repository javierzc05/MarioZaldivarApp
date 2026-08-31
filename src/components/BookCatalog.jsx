import BookEmptyState from './BookEmptyState'
import BookSection from './BookSection'

const normalizeSearchTerm = (value) =>
  value
    .trim()
    .toLowerCase()
    // Split accented letters into a base letter and its diacritic marks (for example, "ú" becomes "u" + accent).
    .normalize('NFD')
    // Remove every Unicode diacritic, including accents, umlauts, tildes, and standalone marks.
    .replace(/\p{Diacritic}/gu, '')

function BookCatalog({ books, searchTerm, onOpenBook }) {
  const normalizedSearchTerm = normalizeSearchTerm(searchTerm)
  const filteredBooks = books.filter((book) =>
    normalizeSearchTerm(book.title).includes(normalizedSearchTerm),
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