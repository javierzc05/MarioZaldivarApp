function BookEmptyState({ searchTerm }) {
  return (
    <section className="wall-empty" aria-live="polite">
      <p>No se encontraron libros para "{searchTerm}".</p>
    </section>
  )
}

export default BookEmptyState