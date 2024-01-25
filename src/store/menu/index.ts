import { create } from 'zustand'

const INITIAL_DATA = {
  showMenu: false,
}

export type StateDataProps = {
  showMenu: boolean
}

type ActionProps = {
  settingCloseMenuStore: () => void
  settingToggleStore: () => void
}
type MenuStoreProps = {
  state: StateDataProps
  actions: ActionProps
}

export const useMenuStore = create<MenuStoreProps>((set) => ({
  state: INITIAL_DATA,
  actions: {
    settingCloseMenuStore: () =>
      set((store) => ({
        state: { ...store.state, showMenu: false },
      })),
    settingToggleStore: () =>
      set((store) => ({
        state: { ...store.state, showMenu: !store.state.showMenu },
      })),
  },
}))
