import { ChevronRight } from 'lucide-react'
import { Typography } from '../Typography'
import { LinksStore } from '../LinksStore'

import { Heading } from '../Heading'
import { LinkButtonTarget } from '../LinkButtonTarget'
import { SectionContainer } from '../SectionContainer'

export function SectionMoreProducts() {
  return (
    <SectionContainer transition={{ duration: 0.7 }} className="pt-10">
      <Heading type="h3" size="lg" font="inter">
        Explore mais
      </Heading>
      <p className="font-bold font-sora text-fd-gray-50 text-4xl my-10">
        Conheça mais sobre
        <br /> nossas soluções
      </p>

      <div className="flex gap-10 max-lg:flex-col max-lg:gap-20">
        <article>
          <Heading type="h4" size="lg" font="inter" className="mb-5">
            Para clientes
          </Heading>

          <Typography size="lg" className="mb-2">
            O Fidelion Cliente é um aplicativo que foi cuidadosamente
            desenvolvido para proporcionar a você uma experiência única de
            fidelização com as empresas que você ama.
          </Typography>
          <Typography size="lg" className="mb-2">
            Seja você um entusiasta de cafés, um amante de moda ou um aficionado
            por tecnologia, o Fidelion Cliente é o aplicativo ideal para você.
          </Typography>
          <Typography size="lg" className="mb-8">
            Baixe gratuitamente e descubra ofertas emocionantes, acumule pontos
            e descubra tudo que o Fidelion pode te oferecer!
          </Typography>
          <LinksStore type="light" />
        </article>

        <article>
          <Heading type="h4" size="lg" font="inter" className="mb-5">
            Para empresas
          </Heading>

          <Typography size="lg" className="mb-2">
            O Fidelion Empresa é uma plataforma que foi cuidadosamente pensada
            para o seu negócio, independente do seu nicho.
          </Typography>
          <Typography size="lg" className="mb-2">
            Com nossa ferramenta você tem controle total sobre seus próprios
            programas de fidelidade.
          </Typography>
          <Typography size="lg" className="mb-2">
            Crie recompensas personalizadas, promoções exclusivas e ofertas
            especiais para atender às necessidades específicas do seu
            público-alvo.
          </Typography>
          <Typography size="lg" className="mb-2">
            Engaje seus clientes, construa relacionamentos sólidos e veja seu
            negócio prosperar.
          </Typography>
          <Typography size="lg" className="mb-8">
            Experimente gratuitamente por {process.env.NEXT_PUBLIC_DAYS_FREE}{' '}
            dias. Comece agora, sem compromisso!
          </Typography>
          <div className="flex mb-7">
            <LinkButtonTarget
              href={String(
                process.env.NEXT_PUBLIC_LINK_GO_TO_CREATE_COMPANY_ACCOUNT,
              )}
              title="Cadastre-se como empresa"
              icon={<ChevronRight size={28} />}
            />
          </div>
        </article>
      </div>
      <div className="h-10" />
    </SectionContainer>
  )
}
