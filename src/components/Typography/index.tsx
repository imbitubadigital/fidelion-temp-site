import { ComponentProps, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const typography = tv({
  base: 'flex justify-between items-center px-4 gap-1 rounded-full p-0 m-0 xl font-inter',
  variants: {
    color: {
      white: 'text-fd-gray-100',
      grayLight: 'text-fd-gray-500',
      gray: 'text-fd-gray-600',
      black: 'text-fd-gray-800',
      red: 'text-fd-red-600',
    },
    size: {
      xs: 'text-xs font-medium',
      sm: 'text-sm font-normal',
      base: 'text-base font-normal',
      lg: 'text-lg font-medium',
      xl: 'text-xl font-medium',
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 'base',
  },
})
type ButtonLinkProps = ComponentProps<'p'> &
  VariantProps<typeof typography> & {
    children: ReactNode
  }

export function Typography({
  color,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <>
      <p className={typography({ color, size, className })} {...rest}>
        {children}
      </p>
    </>
  )
}
