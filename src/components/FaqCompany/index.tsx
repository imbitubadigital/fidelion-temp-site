'use client'

import { HeaderTitleDescription } from '@/components/HeaderTitleDescription'
import { MenuTabs } from '@/components/MenuTab'

import { QuestionsFetch } from '../QuestionsFetch'
import { links } from '@/app/central-de-ajuda/data'

export default function FaqCompany() {
  return (
    <>
      <HeaderTitleDescription
        title="Central de ajuda"
        description="Tire suas principais dúvidas através de nossa sessão de perguntas frequentes!"
      />
      <MenuTabs title="Perguntas frequentes" links={links} />

      <QuestionsFetch
        url="faqs/site-company"
        message="Ainda não existe perguntas frequentes relacionadas a empresa!"
      />
    </>
  )
}
