'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const article = tv({
  base: '',
})

type ArticleContainerProps = ComponentProps<typeof motion.article> &
  VariantProps<typeof article> & {
    children: ReactNode
  }
export function ArticleContainer({
  children,
  className,
  ...rest
}: ArticleContainerProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className={article({ className })}
      {...rest}
    >
      {children}
    </motion.article>
  )
}
