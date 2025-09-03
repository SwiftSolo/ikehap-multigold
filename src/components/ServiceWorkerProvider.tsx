'use client'

import React, { useEffect, ReactNode } from 'react'
import { registerServiceWorker, requestNotificationPermission } from '@/utils/serviceWorker'

interface ServiceWorkerProviderProps {
  children: ReactNode
}

const ServiceWorkerProvider: React.FC<ServiceWorkerProviderProps> = ({ children }) => {
  useEffect(() => {
    // Register service worker on mount
    const initServiceWorker = async () => {
      try {
        await registerServiceWorker()
        
        // Request notification permission for update notifications
        if ('Notification' in window) {
          await requestNotificationPermission()
        }
        
        console.log('Service Worker initialized successfully')
      } catch (error) {
        console.error('Service Worker initialization failed:', error)
      }
    }

    // Only register in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_SW_ENABLED === 'true') {
      initServiceWorker()
    }

    // Handle online/offline events
    const handleOnline = () => {
      console.log('App is online')
      // Trigger background sync if available
      if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
        navigator.serviceWorker.ready.then((registration) => {
          return (registration as any).sync.register('contact-form')
        }).catch((error) => {
          console.error('Background sync registration failed:', error)
        })
      }
    }

    const handleOffline = () => {
      console.log('App is offline')
      // Show offline notification
      showOfflineNotification()
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return <>{children}</>
}

// Show offline notification
const showOfflineNotification = () => {
  const notification = document.createElement('div')
  notification.id = 'offline-notification'
  notification.className = `
    fixed top-4 left-1/2 transform -translate-x-1/2 z-50
    bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg
    transition-all duration-300 opacity-0 translate-y-[-20px]
  `
  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      <span>You're offline. Some features may not be available.</span>
    </div>
  `

  // Remove existing notification if present
  const existing = document.getElementById('offline-notification')
  if (existing) {
    existing.remove()
  }

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1'
    notification.style.transform = 'translateX(-50%) translateY(0)'
  }, 100)

  // Auto remove when back online
  const removeOnOnline = () => {
    notification.style.opacity = '0'
    notification.style.transform = 'translateX(-50%) translateY(-20px)'
    setTimeout(() => {
      if (notification.parentElement) {
        notification.parentElement.removeChild(notification)
      }
    }, 300)
    window.removeEventListener('online', removeOnOnline)
  }

  window.addEventListener('online', removeOnOnline)
}

export default ServiceWorkerProvider