import { useEffect, useState } from "react"
import { throttle } from "throttle-debounce"
export default function WindowScrollWatch({
  hasMore,
  cb,
  threshold,
  isLoading,
}) {
  const [trigger, setTrigger] = useState(false)
  useEffect(() => {
    const handleScroll = throttle(300, () => {
      let calc = Math.floor(window.innerHeight + window.pageYOffset)
      let offsetHeight = Math.floor(document.body.offsetHeight)

      //   console.log({
      //     calc,
      //     offsetHeight,
      //     isLoading,
      //     hasMore,
      //     trigger,
      //   })

      if (
        !trigger &&
        hasMore &&
        calc + threshold >= offsetHeight &&
        !isLoading
      ) {
        // cb tidak langsung dipanggil disini
        // karena bisa saja ke hit lebih dari sekali
        // jika scroll terlalu cepat
        setTrigger(true)
      }
    })
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  })

  useEffect(() => {
    if (trigger) {
      cb && cb()
    }
  }, [trigger])

  useEffect(() => {
    if (trigger) {
      setTrigger(false)
    }
  }, [isLoading])

  return null
}
