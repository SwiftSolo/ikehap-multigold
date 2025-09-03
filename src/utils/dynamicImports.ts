/** @jsxImportSource react */
import dynamic from 'next/dynamic'
import React from 'react'

// Dynamic imports with loading states for better performance

// Lazy load heavy components
const LoadingComponent = () => {
  return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center'
  }, React.createElement('div', {
    className: 'w-12 h-12 border-2 border-green-600 border-t-transparent rounded-full animate-spin'
  }));
}

const FooterLoadingComponent = () => {
  return React.createElement('div', {
    className: 'h-32 flex items-center justify-center'
  }, React.createElement('div', {
    className: 'w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin'
  }));
}

const SmallLoadingComponent = () => {
  return React.createElement('div', {
    className: 'flex items-center justify-center p-8'
  }, React.createElement('div', {
    className: 'w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin'
  }));
}

export const DynamicOverview = dynamic(() => import('@/components/Overview'), {
  loading: () => LoadingComponent(),
  ssr: true
})

export const DynamicSectorsPreview = dynamic(() => import('@/components/SectorsPreview'), {
  loading: () => LoadingComponent(),
  ssr: true
})

export const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  loading: () => FooterLoadingComponent(),
  ssr: true
})

// Page-level dynamic imports
export const DynamicAboutPage = dynamic(() => import('@/app/about/page'), {
  loading: () => LoadingComponent(),
  ssr: true
})

export const DynamicSectorsPage = dynamic(() => import('@/app/sectors/page'), {
  loading: () => LoadingComponent(),
  ssr: true
})

export const DynamicProjectsPage = dynamic(() => import('@/app/projects/page'), {
  loading: () => LoadingComponent(),
  ssr: true
})

export const DynamicContactPage = dynamic(() => import('@/app/contact/page'), {
  loading: () => LoadingComponent(),
  ssr: true
})

// Utility function for creating dynamic components with custom loading
export const createDynamicComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    ssr?: boolean
  } = {}
) => {
  return dynamic(importFn, {
    loading: () => SmallLoadingComponent(),
    ssr: options.ssr ?? true
  })
}

// Preload functions for better UX
export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    // Preload on hover or focus
    const preload = () => {
      importFn().catch(() => {
        // Silently fail if preload fails
      })
    }
    
    return preload
  }
  return () => {}
}

// Intersection observer based lazy loading
export const createIntersectionDynamic = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  threshold = 0.1
) => {
  return dynamic(importFn, {
    loading: () => SmallLoadingComponent(),
    ssr: false // Disable SSR for intersection-based loading
  })
}