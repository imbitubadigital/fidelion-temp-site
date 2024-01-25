import { create } from 'zustand'
import { deleteCookie, setCookie } from 'cookies-next'
const INITIAL_DATA = {
  consentCookies: false,
}

export type StateDataProps = {
  consentCookies: boolean
}

type ActionProps = {
  settingConsentCookiesStore: (value: string) => void
  removeConsentCookiesStore: () => void
}
type ConsentCookiesStoreProps = {
  state: StateDataProps
  actions: ActionProps
}

export const useConsentCookiesStore = create<ConsentCookiesStoreProps>(
  (set) => ({
    state: INITIAL_DATA,
    actions: {
      settingConsentCookiesStore: (value: string) =>
        set((store) => {
          setCookie('@fidelion-consent-cookies', value)
          return {
            state: { ...store.state, consentCookies: true },
          }
        }),
      removeConsentCookiesStore: () =>
        set((store) => {
          deleteCookie('@fidelion-consent-cookies')
          return {
            state: { ...store.state, consentCookies: false },
          }
        }),
    },
  }),
)
