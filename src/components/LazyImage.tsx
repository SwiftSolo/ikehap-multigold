'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLazyImage } from '@/hooks/usePerformance'
import LoadingSpinner from './LoadingSpinner'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  width?: number
  height?: number
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  width,
  height,
  priority = false,
  onLoad,
  onError
}) => {
  const [error, setError] = useState(false)
  const { setImageRef, imageSrc, isLoaded, isInView } = useLazyImage(src, 0.1)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current) {
      setImageRef(imgRef.current)
    }
  }, [])

  const handleLoad = () => {
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
    onError?.()
  }

  // For priority images, load immediately
  const shouldLoad = priority || isInView
  const displaySrc = shouldLoad ? (imageSrc || src) : placeholder

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder or loading state */}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <LoadingSpinner size="sm" color="primary" />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Failed to load</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={displaySrc}
        alt={alt}
        width={width}
        height={height}
        className={`
          w-full h-full object-cover transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${error ? 'hidden' : ''}
        `}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Blur placeholder effect */}
      {placeholder && !isLoaded && !error && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export default LazyImage