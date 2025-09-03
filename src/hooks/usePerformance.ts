'use client'

import { useEffect, useState } from 'react'

// Extend Performance interface to include memory property (Chrome-specific)
interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
}

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const measurePerformance = () => {
      // Measure page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart

      // Measure render time
      const renderStart = performance.now()
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart
        
        // Get memory usage if available
        const memoryUsage = (performance as PerformanceWithMemory).memory?.usedJSHeapSize

        setMetrics({
          loadTime,
          renderTime,
          memoryUsage
        })
        setIsLoading(false)
      })
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  return { metrics, isLoading }
}

// Hook for lazy loading images
export const useLazyImage = (src: string, threshold = 0.1) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!imageRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(imageRef)
    return () => observer.disconnect()
  }, [imageRef, threshold])

  useEffect(() => {
    if (isInView && src && !imageSrc) {
      setImageSrc(src)
    }
  }, [isInView, src, imageSrc])

  useEffect(() => {
    if (!imageSrc) return

    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = imageSrc
  }, [imageSrc])

  return { setImageRef, imageSrc, isLoaded, isInView }
}

// Hook for intersection observer
export const useIntersectionObserver = (threshold = 0.1) => {
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true)
        }
      },
      { threshold }
    )

    observer.observe(elementRef)
    return () => observer.disconnect()
  }, [elementRef, threshold, hasBeenInView])

  return { setElementRef, isInView, hasBeenInView }
}