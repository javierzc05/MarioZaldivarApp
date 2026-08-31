import { useEffect, useState } from 'react'
import { getBookFromHash, toSlug } from '../utils/bookRouting'

function useBookNavigation() {
  const [activeBook, setActiveBook] = useState(null)
  const [bookToFocus, setBookToFocus] = useState(null)

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

  useEffect(() => {
    if (activeBook || !bookToFocus) {
      return
    }

    const targetElement = document.getElementById(bookToFocus)

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

  const openBookDetails = (book) => {
    const bookSlug = toSlug(book.title)
    window.history.pushState({ bookSlug }, '', `#/book/${encodeURIComponent(bookSlug)}`)
    window.sessionStorage.setItem('lastBookSlug', bookSlug)
    setActiveBook(book)
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

  return { activeBook, openBookDetails, closeBookDetails, setActiveBook }
}

export default useBookNavigation