import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set) => ({
      // Theme state
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      
      // Filter state
      searchText: '',
      searchMode: 'byTitle',
      setSearchText: (text) => set({ searchText: text }),
      setSearchMode: (mode) => set({ searchMode: mode }),
      resetFilter: () => set({ searchText: '', searchMode: 'byTitle' })
    }),
    {
      name: 'app-bound-store',
      getStorage: () => localStorage
    }
  )
); 