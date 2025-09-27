"use client"

import { useEffect, useRef, useState } from "react"

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...(options || {}) },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options])

  return { ref, inView } as const
}
