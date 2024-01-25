import { ReactNode } from 'react'

type ContentWrapperProps = {
  children: ReactNode
}
export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="relative  py-10 px-10 z-1 max-w-[1440px] mx-auto max-xl:px-20 max-md:p-5">
      {children}
    </div>
  )
}
