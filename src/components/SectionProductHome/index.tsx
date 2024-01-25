import { ChevronRight } from 'lucide-react'
import { Heading } from '../Heading'
import { Typography } from '../Typography'
import { EffectLine } from '../EffectLine'
import { LinkButtonTarget } from '../LinkButtonTarget'
import { SectionContainer } from '../SectionContainer'

export function SectionProductHome() {
  return (
    <SectionContainer
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex flex-col"
    >
      <Heading size="lg" type="h3" font="inter" className="mb-5 mt-20">
        Produtos
      </Heading>
      <article>
        <Heading size="4xl" type="h4" color="black" className="mb-5">
          Maximize a Fidelização de seus Clientes:
          <br />
          Gerencie Promoções com Eficiência.
        </Heading>
        <Typography size="lg" className="max-w-2xl mb-5">
          Aumente a competitividade e os lucros de sua empresa com o Fidelion!
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5">
          Oferecemos ferramentas digital sob medida para o seu negócio
          prosperar.
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5">
          Potencialize a fidelização de clientes de forma fácil com nossa
          ferramenta robustas.
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5">
          Centralize suas promoções em uma plataforma intuitiva e avalie o
          desempenho do seu programa de fidelidade de forma eficiente.
        </Typography>

        <Typography size="lg" className="max-w-2xl mb-5">
          Seu caminho para o sucesso começa com o Fidelion!
        </Typography>

        <div className="flex mb-7">
          <LinkButtonTarget
            href={String(
              process.env.NEXT_PUBLIC_LINK_GO_TO_CREATE_COMPANY_ACCOUNT,
            )}
            title="Comece agora"
            icon={<ChevronRight size={28} />}
          />
        </div>

        <div className="h-8" />

        <EffectLine />
      </article>
    </SectionContainer>
  )
}
