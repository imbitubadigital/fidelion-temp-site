import { Menu, X } from 'lucide-react'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
export const mobile = tv({
  base: 'flex justify-center items-center transition-all z-10 rounded-full hover:opacity-80 w-9 h-9 max-md:w-10 xl:hidden',
  variants: {
    color: {
      redLight: 'text-fd-gray-100',
      transparent: 'text-fd-gray-100',
    },
    isOpen: {
      true: 'bg-transparent',
      false: 'bg-white',
    },
  },
  defaultVariants: {
    color: 'transparent',
  },
  compoundVariants: [
    {
      color: 'redLight',
      isOpen: true,
      class: 'bg-fd-gray-800',
    },
    {
      color: 'redLight',
      isOpen: false,
      class: 'bg-fd-gray-800',
    },
    {
      color: 'transparent',
      isOpen: true,
      class: 'bg-fd-gray-800',
    },
    {
      color: 'transparent',
      isOpen: false,
      class: 'bg-fd-white-transparent',
    },
  ],
})
type MobileProps = ComponentProps<'button'> &
  VariantProps<typeof mobile> & {
    typeMobile: 'light' | 'dark'
  }

export default function Mobile({
  color,
  typeMobile,
  isOpen,
  ...rest
}: MobileProps) {
  return (
    <button className={mobile({ color, isOpen })} type="button" {...rest}>
      {!isOpen && (
        <Menu
          // className={
          //   typeMobile === 'light' ? 'text-fd-gray-100' : 'text-fd-gray-100'
          // }
          className={'text-fd-gray-100'}
          size={22}
        />
      )}
      {isOpen && (
        <X
          // className={
          //   typeMobile === 'light' ? 'text-fd-gray-100' : 'text-fd-gray-100'
          // }
          className={'text-fd-gray-100'}
          size={22}
        />
      )}
    </button>
  )
}
