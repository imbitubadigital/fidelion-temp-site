'use client'
import { ComponentProps, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { tv, VariantProps } from 'tailwind-variants'

export const linkTarget = tv({
  base: 'flex justify-between items-center px-4 gap-1 transition-all rounded-full m-0 font-inter',
  variants: {
    color: {
      red: 'bg-fd-red-600 text-fd-gray-100 hover:bg-fd-red-700',
      redLight: 'bg-fd-red-100 text-fd-gray-100 hover:bg-fd-red-600',
      orange: 'bg-fd-red-400 text-fd-gray-100',
      blue: 'bg-fd-blue-500 text-fd-gray-100',
      darkBlue: 'bg-fd-gray-800 text-fd-gray-100 hover:bg-fd-blue-600',
      transparent:
        'bg-fd-white-transparent text-fd-gray-100 hover:bg-fd-gray-800',
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
type LinkButtonTargetProps = ComponentProps<typeof motion.a> &
  VariantProps<typeof linkTarget> & {
    title: string
    icon?: ReactElement
    targetBlank?: boolean
  }

export function LinkButtonTarget({
  title,
  icon,
  color,
  size,
  className,
  ...rest
}: LinkButtonTargetProps) {
  return (
    <motion.a
      // initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      // exit={{ scale: 1 }}
      // transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={linkTarget({ color, size, className })}
      target="_blank"
      {...rest}
    >
      <>
        {title}
        {icon && icon}
      </>
    </motion.a>
  )
}
