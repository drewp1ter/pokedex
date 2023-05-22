'use client'
import { createContext, useContext, PropsWithChildren } from 'react'
import Store from '@/store'

let store: Store
export const StoreContext = createContext<Store | undefined>(undefined)

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

function initializeStore() {
  const _store = store ?? new Store()

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function StoreProvider({ children }: PropsWithChildren) {
  const store = initializeStore()

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
