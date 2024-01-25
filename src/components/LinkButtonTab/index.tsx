import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const link = tv({
  base: 'flex justify-between items-center px-5 gap-1 transition-all rounded-full hover:opacity-80 m- h-8 font-semibold border border-fd-red-600 text-sm font-inter max-sm:text-xs',
  variants: {
    type: {
      active: 'bg-fd-red-600 text-fd-gray-100',
      inactive: 'bg-transparent text-fd-red-600',
    },
  },
  defaultVariants: {
    type: 'active',
  },
})
type LinkButtonProps = LinkProps &
  VariantProps<typeof link> & {
    title: string
    icon?: ReactElement
    targetBlank?: boolean
  }

export function LinkButtonTab({ title, icon, type, ...rest }: LinkButtonProps) {
  return (
    <Link className={link({ type })} {...rest}>
      <>
        {title}
        {icon && icon}
      </>
    </Link>
  )
}
