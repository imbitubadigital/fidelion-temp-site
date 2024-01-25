import { fetchWrapper } from '@/services/fetch'
import { Heading } from '../Heading'

import { PlanCard } from '../PlanCard'

import { Typography } from '../Typography'
import { EmptyRequest } from '../EmptyRequest'

export type PlanProps = {
  id: string
  planId: number
  title: string
  content: string
  interval: number
  repeat: number
  order: number
  status: string
  priceBase: string
  price: string
  discountBase: number
  discountCart: number
  createdAt: string
  updateAt: string
}

export async function SectionPlans() {
  const data = await fetchWrapper<PlanProps[]>('plans/active', {
    next: {
      revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_REQUEST),
    },
  })

  if (data.length < 1) {
    return <EmptyRequest message="Ainda não existem planos cadastrados." />
  }
  return (
    <section className="flex flex-col ">
      <Heading
        size="lg"
        type="h3"
        font="inter"
        className="mb-5 mt-20 max-md:mt-10"
      >
        Planos
      </Heading>
      <Typography size="lg" className="max-w-2xl mb-10">
        Escolha um plano que se adapte às necessidades da sua empresa.
      </Typography>
      <div className="grid grid-cols-4 gap-8  max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            position={index}
            isRecommended={
              Number(process.env.NEXT_PUBLIC__RECOMMENDED_PLAN) === index + 1
            }
          />
        ))}
      </div>
    </section>
  )
}
