import './App.css'
import { useState } from 'react'
import { books } from './models/Book'
import whatsappIcon from './assets/whatsapp.png'
import BookDetails from './components/BookDetails'
import AboutMe from './components/AboutMe'
import LoadingScreen from './components/LoadingScreen'
import SiteHeader from './components/SiteHeader'
import BookCatalog from './components/BookCatalog'
import useImagePreloader from './hooks/useImagePreloader'
import useBookNavigation from './hooks/useBookNavigation'

const SKELETON_MAX_DURATION_MS = 3000

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const isLoading = useImagePreloader(books, SKELETON_MAX_DURATION_MS)
  const { activeBook, openBookDetails, closeBookDetails, setActiveBook } = useBookNavigation()

  const openAboutMe = () => {
    setShowAboutMe(true)
    setActiveBook(null)
  }

  const closeAboutMe = () => {
    setShowAboutMe(false)
  }

  if (isLoading) {
    return <LoadingScreen />
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
      <SiteHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenAboutMe={openAboutMe}
      />
      <BookCatalog books={books} searchTerm={searchTerm} onOpenBook={openBookDetails} />
    </main>
  )
}

export default App
