import { create } from 'zustand'
type TypeProps = 'light' | 'dark'
const INITIAL_DATA = {
  typex: 'light' as TypeProps,
}

export type StateDataProps = {
  typex: TypeProps
}

type ActionProps = {
  settingTypeHeaderStore: (typex: TypeProps) => void
}
type MenuStoreProps = {
  state: StateDataProps
  actions: ActionProps
}

export const useTypeMenuStore = create<MenuStoreProps>((set) => ({
  state: INITIAL_DATA,
  actions: {
    settingTypeHeaderStore: (typex: TypeProps) =>
      set((store) => ({
        state: { ...store.state, typex },
      })),
  },
}))
