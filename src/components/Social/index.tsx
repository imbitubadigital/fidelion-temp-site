'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useMenuStore } from '@/store/menu'
import { useMemo } from 'react'

type SocialProps = {
  type: 'light' | 'dark' | 'footer'
}
export function Social({ type }: SocialProps) {
  const instagram = useMemo(() => {
    if (type === 'footer') {
      return '/instagram-footer.svg'
    }
    if (type === 'dark') {
      return '/instagram-light.svg'
    }

    return '/instagram-red.svg'
  }, [type])

  const facebook = useMemo(() => {
    if (type === 'footer') {
      return '/facebook-footer.svg'
    }
    if (type === 'dark') {
      return '/facebook-light.svg'
    }

    return '/facebook-red.svg'
  }, [type])

  const tiktok = useMemo(() => {
    if (type === 'footer') {
      return '/tiktok-footer.svg'
    }
    if (type === 'dark') {
      return '/tiktok-light.svg'
    }

    return '/tiktok-red.svg'
  }, [type])

  const settingCloseMenuStore = useMenuStore(
    (store) => store.actions.settingCloseMenuStore,
  )

  return (
    <div
      className={`flex gap-4 items-center ${
        type === 'footer' ? 'justify-start' : 'justify-center'
      }  w-28 xl:justify-end`}
    >
      <a
        href={process.env.NEXT_PUBLIC_LINK_GO_TO_INSTAGRAM}
        target="_blank"
        onClick={settingCloseMenuStore}
        className="hover:opacity-80"
      >
        <Image
          src={instagram}
          width={24}
          height={24}
          alt="Acesse o instagram do Fidelion"
        />
      </a>
      <a
        href={process.env.NEXT_PUBLIC_LINK_GO_TO_TIKTOK}
        target="_blank"
        onClick={settingCloseMenuStore}
        className="hover:opacity-80"
      >
        <Image
          src={tiktok}
          width={24}
          height={24}
          alt="Acesse o tiktok do Fidelion"
        />
      </a>
      <a
        href={process.env.NEXT_PUBLIC_LINK_GO_TO_FACEBOOK}
        target="_blank"
        onClick={settingCloseMenuStore}
        className="hover:opacity-80"
      >
        <Image
          src={facebook}
          width={24}
          height={24}
          alt="Acesse o facebook do Fidelion"
        />
      </a>
    </div>
  )
}
