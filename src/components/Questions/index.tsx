'use clients'

import { FaqItem } from '../FaqItem'
import { useState } from 'react'

type QuestionsProps = {
  data: {
    _id: string
    question: string
    answer: string
  }[]
}
export function Questions({ data }: QuestionsProps) {
  const [selected, setSelected] = useState('')

  return (
    <div className="flex flex-col gap-10 mt-6 ">
      {data.length > 0 &&
        data.map((item) => (
          <FaqItem
            key={item._id}
            isOpen={selected === item._id}
            title={item.question}
            description={item.answer}
            onClick={() => setSelected(item._id === selected ? '' : item._id)}
          />
        ))}
    </div>
  )
}
