'use client'
import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { tv, VariantProps } from 'tailwind-variants'
const MotionLink = motion(Link)
export const link = tv({
  base: 'flex justify-between items-center px-5 gap-1 transition-all rounded-full m-0 font-inter',
  variants: {
    color: {
      red: 'bg-fd-red-600 text-fd-gray-100 hover:bg-fd-red-700',
      redLight: 'bg-fd-red-100 text-fd-gray-100 hover:bg-fd-red-600',
      orange: 'bg-fd-red-400 text-fd-gray-100',
      blue: 'bg-fd-blue-500 text-fd-gray-100',
      transparent: 'bg-fd-white-transparent text-fd-gray-100',
    },
    size: {
      sm: 'h-8 font-semibold text-sm',
      md: 'h-10 font-bold text-base max-md:text-sm',
    },
  },
  defaultVariants: {
    color: 'red',
    size: 'md',
  },
})
type LinkButtonProps = LinkProps &
  VariantProps<typeof link> & {
    title: string
    icon?: ReactElement
    targetBlank?: boolean
  }

export function LinkButton({
  title,
  icon,
  color,
  size,
  ...rest
}: LinkButtonProps) {
  return (
    <MotionLink
      whileHover={{ scale: 1.1 }}
      className={link({ color, size })}
      {...rest}
    >
      <>
        {title}
        {icon && icon}
      </>
    </MotionLink>
  )
}
