import { useEffect, useState } from 'react'

function useImagePreloader(items, maximumDuration) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const imageUrls = Array.from(
      new Set(items.flatMap((item) => [item.cover, item.wall]).filter(Boolean)),
    )

    const imageLoads = imageUrls.map((url) => new Promise((resolve) => {
      const image = new Image()
      image.onload = resolve
      image.onerror = resolve
      image.src = url

      if (image.complete) {
        resolve()
      }
    }))

    const maximumWait = new Promise((resolve) => {
      window.setTimeout(resolve, maximumDuration)
    })

    Promise.race([Promise.all(imageLoads), maximumWait]).then(() => {
      if (isMounted) {
        setIsLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [items, maximumDuration])

  return isLoading
}

export default useImagePreloader