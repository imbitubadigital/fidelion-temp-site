import { Heading } from '../Heading'
import { Typography } from '../Typography'

type ParagraphProps = {
  id: string
  content: string
}

type ItemProps = {
  id: string
  title: string
  paragraphs: ParagraphProps[]
}
type TermsOrPolicyCardProps = {
  items: ItemProps[]
}

export function TermsAndPolicy({ items }: TermsOrPolicyCardProps) {
  return (
    <div className="mt-10">
      {items.map((item) => (
        <div key={item.id} className="mb-6">
          <Heading type="h6" color="black" size="lg" className="mb-2">
            {item.title}
          </Heading>
          {item.paragraphs.map((paragraph) => (
            <Typography size="lg" key={paragraph.id} className="mb-2">
              {paragraph.content}
            </Typography>
          ))}
        </div>
      ))}
    </div>
  )
}
