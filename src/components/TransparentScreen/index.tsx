import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const transparentScreen = tv({
  base: 'w-full min-h-screen h-20 z-10 bg-fd-black-transparent  top-0 left-0  xl:hidden',
  variants: {
    isOpen: {
      true: 'fixed',
      false: 'hidden',
    },
  },
})
type TransparentScreenProps = ComponentProps<'button'> &
  VariantProps<typeof transparentScreen> & {
    onClose: () => void
  }

export function TransparentScreen({
  isOpen,
  onClose,
  ...rest
}: TransparentScreenProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={transparentScreen({ isOpen })}
      {...rest}
    />
  )
}
