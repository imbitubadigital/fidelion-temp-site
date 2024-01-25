import { ChevronRight } from 'lucide-react'
import { Typography } from '../Typography'

import { LinkButton } from '../LinkButton'
import { Heading } from '../Heading'
import { ArticleContainer } from '../ArticleContainer'

export function SectionActionPlans() {
  return (
    <ArticleContainer transition={{ duration: 0.6, delay: 0.4 }}>
      <Heading size="lg" type="h5" font="inter" className="mb-5 mt-10">
        Planos
      </Heading>
      <p className="font-bold font-sora text-fd-gray-50 text-4xl my-10  max-lg:text-3xl">
        Escolha o Seu Caminho de Fidelização
        <br /> com os Planos Fidelion
      </p>

      <div className="flex gap-10 max-lg:flex-col max-lg:gap-20">
        <div>
          <Typography size="lg" className="mb-10 w-full">
            Descubra os planos Fidelion e leve sua estratégia de fidelização
            para o próximo nível. Escolha o plano que se alinha com os objetivos
            do seu negócio e comece a transformar interações em fidelidade
            duradoura.
          </Typography>

          <div className="flex">
            <LinkButton
              href={'/planos'}
              title="Ver planos"
              icon={<ChevronRight size={28} />}
            />
          </div>
        </div>
      </div>
      <div className="h-12" />
    </ArticleContainer>
  )
}
