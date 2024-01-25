import { ChevronDown } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'
import { Heading } from '../Heading'
import { Typography } from '../Typography'

export interface FaqItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  description: string
  isOpen: boolean
}

export function FaqItem({ title, description, isOpen, ...rest }: FaqItemProps) {
  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-start gap-1 text-red-800 bg-transparent border-0"
        {...rest}
      >
        <div
          className={`transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          } duration-400 ease-in-out`}
        >
          {/* <p>{teste}</p> */}
          <ChevronDown size={36} className="text-fd-red-600" />
        </div>
        <Heading size="xl" color="black" className="text-left max-sm:text-lg">
          {title}
        </Heading>
      </button>
      <div
        className={`transform ${
          isOpen ? 'scale-y-1' : 'scale-y-0'
        } transform-origin-top transition-transform duration-260 ease-margin-bottom-${
          isOpen ? '16' : '0'
        } max-h-${isOpen ? '500' : '0'}`}
      >
        {isOpen && <Typography size="lg">{description}</Typography>}
      </div>
    </div>
  )
}
