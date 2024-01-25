import Link from 'next/link'
import Image from 'next/image'

type LogoProps = {
  type: 'light' | 'dark'
}
export default function Logo({ type }: LogoProps) {
  return (
    <>
      <h1 className="fixed -mt-96">Fidelion</h1>
      <Link href="/">
        {
          <Image
            src={type !== 'light' ? `/logo-light.svg` : `/logo-dark.svg`}
            width={153}
            height={29}
            alt="Fidelion"
          />
        }
      </Link>
    </>
  )
}
