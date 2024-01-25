import { ComponentProps, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const heading = tv({
  base: 'flex justify-between items-center px-4 gap-1 p-0 m-0',
  variants: {
    color: {
      white: 'text-fd-gray-100',
      red: 'text-fd-red-600',
      black: 'text-fd-gray-800',
    },
    size: {
      lg: 'text-lg font-semibold',
      xl: 'text-xl font-semibold',
      '4xl': 'text-4xl font-bold',
      '6xl': 'text-6xl font-bold',
    },
    font: {
      sora: 'font-sora',
      inter: 'font-inter',
    },
  },
  defaultVariants: {
    color: 'red',
    size: 'xl',
    font: 'sora',
  },
})
type HeadingProps = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> &
  VariantProps<typeof heading> & {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
  }

export function Heading({
  type = 'h3',
  color,
  size,
  font,
  className,
  children,
  ...rest
}: HeadingProps) {
  return (
    <>
      {type === 'h1' && (
        <h1 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h1>
      )}
      {type === 'h2' && (
        <h2 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h2>
      )}
      {type === 'h3' && (
        <h3 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h3>
      )}
      {type === 'h4' && (
        <h3 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h3>
      )}
      {type === 'h5' && (
        <h4 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h4>
      )}
      {type === 'h6' && (
        <h5 className={heading({ color, size, font, className })} {...rest}>
          {children}
        </h5>
      )}
    </>
  )
}
