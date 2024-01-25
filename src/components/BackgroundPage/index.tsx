'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
export function BackgroundPage() {
  const pathname = usePathname()
  const [aaa, setAaa] = useState(true)
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  const isMobile = useMediaQuery({ minWidth: 768 })

  let height = 'h-[120px]'

  if (!isMobile) {
    height = 'h-[80px]'
  }

  useLayoutEffect(() => {
    setAaa(isDesktop)
  }, [isDesktop])

  if (!aaa) {
    return (
      <Image
        src="/bg-menu-mobile-2.jpg"
        width={1280}
        height={132}
        alt="Background Fidelion"
        className={`w-full absolute top-0 -z-1 ${height}`}
      />
    )
  }

  if (pathname !== '/') {
    return null
  }
  return (
    <Image
      src="/bg.png"
      width={1512}
      height={732}
      alt="Background Fidelion"
      className="w-full absolute top-0 -z-1  h-auto"
    />
  )
}
