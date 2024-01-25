import { ComponentProps, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const menuWrapper = tv({
  base: 'flex justify-between items-start gap-8 w-auto flex-col h-screen fixed top-0 left-0 transition-transform duration-300 transform $ z-20 bg-fd-gray-800 p-12 xl:flex xl:flex-row xl:items-center xl:gap-4 xl:w-full xl:static xl:bg-transparent xl:p-0 xl:h-fit xl:translate-x-0',
  variants: {
    isOpen: {
      true: '0',
      false: '-translate-x-full',
    },
  },
})
type MenuWrapperProps = ComponentProps<'div'> &
  VariantProps<typeof menuWrapper> & {
    children: ReactNode
  }

export function MenuWrapper({ isOpen, children, ...rest }: MenuWrapperProps) {
  return (
    <div className={menuWrapper({ isOpen })} {...rest}>
      {children}
    </div>
  )
}
