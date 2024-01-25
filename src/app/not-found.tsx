import { ContentWrapper } from '@/components/ContentWrapper'
import { Heading } from '@/components/Heading'
import { LinkButton } from '@/components/LinkButton'
import { SectionContainer } from '@/components/SectionContainer'
import { Typography } from '@/components/Typography'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Página não encontrada | Fidelion',
  description: 'Descrição seo sobre o fidelion',
}
export default function NotFound() {
  return (
    <main>
      <ContentWrapper>
        <SectionContainer
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 flex-col justify-center min-h-[300px]"
        >
          <Heading
            type="h2"
            size="6xl"
            color="black"
            className="leading-[4.375rem] mb-7 max-lg:text-4xl"
          >
            Opps! Página não encontrada!
          </Heading>
          <Typography>
            Desculpe, a página que você tentou acessar não foi localizada em
            nosso sistema.
          </Typography>
          <Typography>
            Utilize o botão abaixo para voltar para a home e ter sua melhor
            experiência!
          </Typography>
          <div className="flex mt-7">
            <LinkButton
              href="/"
              title="Voltar para home"
              icon={<ChevronRight size={28} />}
            />
          </div>
        </SectionContainer>
      </ContentWrapper>
    </main>
  )
}
