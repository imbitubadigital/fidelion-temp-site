import Image from 'next/image'

// import Test from '@/assets/apple-store-dark.svg'
type LinksStoreProps = {
  type?: 'dark' | 'light'
}
export function LinksStore({ type = 'dark' }: LinksStoreProps) {
  const appleImg =
    type === 'dark' ? '/apple-store-dark.png' : '/apple-store-light.svg'
  const googleImg =
    type === 'dark' ? '/google-play-dark.png' : '/google-play-light.svg'
  return (
    <div className="flex gap-2">
      <a href={process.env.NEXT_PUBLIC_LINK_APP_GOOGLE_PLAY} target="_blank">
        <Image
          src={googleImg}
          width={140}
          height={48}
          alt="Clique aqui e baixe o aplicativo Fidelion Cliente na Google Play"
          className="hover:opacity-80 transition-all"
        />
      </a>
      <a href={process.env.NEXT_PUBLIC_LINK_APP_APPLE_STORE} target="_blank">
        <Image
          src={appleImg}
          width={140}
          height={48}
          alt="Clique aqui e baixe o aplicativo Fidelion Cliente na Apple Store"
          className="hover:opacity-80 transition-all"
        />
      </a>
    </div>
  )
}
