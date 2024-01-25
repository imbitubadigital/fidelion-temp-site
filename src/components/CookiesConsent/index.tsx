'use client'
import { useConsentCookiesStore } from '@/store/consentCookies'
import { ContentWrapper } from '../ContentWrapper'

import { hasCookie, getCookie } from 'cookies-next'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
export function CookiesConsent() {
  const consentCookies = useConsentCookiesStore(
    (store) => store.state.consentCookies,
  )
  const settingConsentCookiesStore = useConsentCookiesStore(
    (store) => store.actions.settingConsentCookiesStore,
  )

  useEffect(() => {
    if (hasCookie('@fidelion-consent-cookies')) {
      settingConsentCookiesStore(
        getCookie('@fidelion-consent-cookies') as string,
      )
    }
  }, [settingConsentCookiesStore])

  if (consentCookies) {
    return true
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="bg-fd-gray-50 fixed bottom-0 left-0 w-full z-[5000] "
    >
      <ContentWrapper>
        <div className="flex justify gap-5">
          <div className="flex-1">
            <p>Aqui um texto explicando</p>
          </div>
          <div className="flex gap-5">
            <button onClick={() => settingConsentCookiesStore('removed')}>
              recusar
            </button>

            <button onClick={() => settingConsentCookiesStore('accept')}>
              aceitar
            </button>
          </div>
        </div>
      </ContentWrapper>
    </motion.div>
  )
}
