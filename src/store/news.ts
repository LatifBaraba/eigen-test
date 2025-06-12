import { create } from 'zustand'

const useNewsStore = create(set => ({
    news: {},
    setNews: () =>
        set((state: any) => ({
            news: state.news,
        })),
}))
