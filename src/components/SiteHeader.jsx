function SiteHeader({ searchTerm, onSearchChange, onOpenAboutMe }) {
  return (
    <header className="site-header">
      <div className="header-copy">
        <a
          href="#about-me"
          className="about-me"
          onClick={(event) => {
            event.preventDefault()
            onOpenAboutMe()
          }}
        >
          Mario Zaldívar
        </a>

        <label className="header-filter" htmlFor="book-filter-input">
          <input
            id="book-filter-input"
            type="text"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por título"
          />
        </label>
      </div>

      <h1>Libros publicados</h1>
    </header>
  )
}

export default SiteHeader