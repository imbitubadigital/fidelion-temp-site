'use client'
import { useMemo } from 'react'
import { ArticleContainer } from '../ArticleContainer'
import { Heading } from '../Heading'
import { LinkButtonTarget } from '../LinkButtonTarget'
import { PlanProps } from '../SectionPlans'
import { Typography } from '../Typography'
import Image from 'next/image'
import { currencyMask } from '@/utils/mask/currency'

type PlansCardProps = {
  isRecommended?: boolean
  plan: PlanProps
  position: number
}

const icons = ['/star.svg', '/ray.svg', '/fire.svg', '/drop.svg']
export function PlanCard({
  isRecommended = false,
  position,
  plan,
}: PlansCardProps) {
  const prices = useMemo(() => {
    const priceBase = Number(plan.priceBase) * plan.interval
    const price = Number(plan.price)
    const saving = Number(priceBase) - Number(price)

    return {
      currencyPriceBase: currencyMask(priceBase.toFixed(2)),
      currencyPrice: currencyMask(price.toFixed(2)),
      currencySaving: currencyMask(saving.toFixed(2)),
    }
  }, [plan.interval, plan.price, plan.priceBase])
  return (
    <ArticleContainer
      transition={{ duration: 0.6, delay: 0.2 }}
      className="px-5 py-7 shadow-fd-plan rounded-3xl relative"
    >
      <div className="flex justify-between items-center gap-4 mb-4 ">
        <div className="flex justify-start gap-4">
          <Image src={icons[position]} width={36} height={36} alt="" />
          <Heading
            size="xl"
            type="h4"
            color="black"
            font="inter"
            className="font-bold"
          >
            {plan.title}
          </Heading>
        </div>
        {isRecommended && (
          <div className="flex font-inter bg-fd-gray-800 py-2 px-4 rounded-full text-xs font-semibold text-fd-gray-100 absolute -top-3 right-4">
            Recomendado
          </div>
        )}
      </div>
      <p className="text-lg font-inter text-fd-gray-500 font-medium mb-1">
        De <span className="line-through">R$ {prices.currencyPriceBase}</span>
      </p>
      <p className="text-lg font-inter text-fd-gray-500 font-medium mb-5">
        Por{' '}
        <span className="text-2xl text-fd-gray-800 font-semibold">
          {' '}
          R$ {prices.currencyPrice}
        </span>
      </p>
      <p className="text-sm font-inter text-fd-gray-500 font-medium mb-5">
        Economize{' '}
        <span className="text-sm text-fd-gray-800 font-semibold">
          {prices.currencySaving} ({plan.discountBase}%)
        </span>
      </p>
      <Typography className="max-w-2xl mb-8">{plan.content}</Typography>
      <div className="flex justify-center">
        <LinkButtonTarget
          href={String(
            process.env.NEXT_PUBLIC_LINK_GO_TO_CREATE_COMPANY_ACCOUNT,
          )}
          title="Vamos começar"
          color="darkBlue"
          size="sm"
        />
      </div>
    </ArticleContainer>
  )
}
