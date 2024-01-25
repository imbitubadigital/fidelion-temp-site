import { Questions } from '../Questions'
import { EmptyRequest } from '../EmptyRequest'
import { fetchWrapper } from '@/services/fetch'

type QuestionsFetchProps = {
  url: string
  message: string
}

type QuestionsRequest = {
  _id: string
  question: string
  answer: string
}

export async function QuestionsFetch({ url, message }: QuestionsFetchProps) {
  const data = await fetchWrapper<QuestionsRequest[]>(url, {
    next: {
      revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_REQUEST),
    },
  })

  if (data.length < 0) {
    return <EmptyRequest message={message} />
  }
  return <Questions data={data} />
}
