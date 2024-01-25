import Link, { LinkProps } from 'next/link'

import { ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const link = tv({
  base: 'flex justify-between items-center px-4 gap-1 transition-all rounded-full p-0 m-0 font-inter',
  variants: {
    color: {
      white: 'text-fd-gray-100 hover:text-fd-gray-250',
      gray: 'text-fd-gray-500 hover:text-fd-gray-800',
      red: 'text-fd-red-600 hover:text-fd-red-700',
    },
    type: {
      menu: 'text-lg font-medium',
      footer: 'text-base font-medium',
      terms: 'text-lg font-medium',
      plan: 'text-lg font-bold',
      link: 'text-base font-bold',
    },
    font: {
      sora: 'font-sora',
      inter: 'font-inter',
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 'menu',
    type: 'menu',
    font: 'inter',
  },
})
type LinkTextProps = LinkProps &
  VariantProps<typeof link> & {
    children: ReactNode
  }

export function LinkText({
  children,
  color,
  type,
  font,
  ...rest
}: LinkTextProps) {
  return (
    <Link className={link({ color, type, font })} {...rest}>
      {children}
    </Link>
  )
}
