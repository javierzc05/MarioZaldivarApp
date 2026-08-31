import { books } from '../models/Book'

export const toSlug = (title) =>
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const getBookFromHash = () => {
  const match = window.location.hash.match(/^#\/book\/([^/?#]+)/)

  if (!match) {
    return null
  }

  const slug = decodeURIComponent(match[1])
  return books.find((book) => toSlug(book.title) === slug) ?? null
}