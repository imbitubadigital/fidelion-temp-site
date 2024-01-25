'use client'
import { useConsentCookiesStore } from '@/store/consentCookies'

export function ConfigCookies() {
  const removeConsentCookiesStore = useConsentCookiesStore(
    (store) => store.actions.removeConsentCookiesStore,
  )

  return (
    <button
      className="flex justify-between items-center px-4 gap-1 transition-all rounded-full p-0 m-0 text-lg font-medium text-fd-gray-500 hover:text-fd-gray-800 font-inter"
      onClick={removeConsentCookiesStore}
    >
      Configuração de Cookies
    </button>
  )
}
