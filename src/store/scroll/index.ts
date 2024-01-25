import { create } from 'zustand'

const INITIAL_DATA = {
  scrollTop: false,
}

export type StateDataProps = {
  scrollTop: boolean
}

type ActionProps = {
  settingScrollTopStore: (scrollTop: boolean) => void
}
type ScrollStoreProps = {
  state: StateDataProps
  actions: ActionProps
}

export const useScrollStore = create<ScrollStoreProps>((set) => ({
  state: INITIAL_DATA,
  actions: {
    settingScrollTopStore: (scrollTop) =>
      set((store) => ({
        state: { ...store.state, scrollTop },
      })),
  },
}))
