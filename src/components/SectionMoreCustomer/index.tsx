import { Typography } from '../Typography'
import { LinksStore } from '../LinksStore'

import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { ArticleContainer } from '../ArticleContainer'

export function SectionMoreCustomer() {
  return (
    <SectionContainer
      transition={{ duration: 0.7, delay: 0.1 }}
      className="pt-10"
    >
      <Heading type="h4" size="lg" font="inter">
        Aplicativo Fidelion Cliente
      </Heading>
      <p className="font-bold font-sora text-fd-gray-50 text-4xl my-10">
        Entenda as vantagens
        <br /> de ter o Fidelion Cliente,
        <br /> instalado no seu dispositivo!
      </p>

      <div className="grid grid-cols-3 gap-8 mt-12 max-lg:grid-cols-1 max-lg:gap-20">
        <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
          <Heading type="h5" size="lg" font="inter" className="mb-5">
            Acumule Pontos, Ganhe Recompensas: Receba seu identificador
            exclusivo!
          </Heading>
          <Typography size="lg" className="mb-8">
            Faça seu cadastro e receba imediatamente seu QR Code exclusivo, sua
            passagem para as melhores promoções. Ao apresentá-lo nas empresas
            parceiras durante suas compras, acumule pontos instantaneamente e
            aproveite vantagens incríveis. Cadastre-se utilizando seu melhor
            email ou através de login social Google, Facebook ou Apple.
          </Typography>
          <LinksStore type="light" />
        </ArticleContainer>

        <ArticleContainer transition={{ duration: 0.6, delay: 0.4 }}>
          <Heading type="h5" size="lg" font="inter" className="mb-5">
            Transforme Seu Celular em uma ferramenta de vantagens com nosso
            leitor de Qr code exclusivo.
          </Heading>

          <Typography size="lg">
            O aplicativo Fidelion Cliente também permite que você entre nas
            promoções escaneando QR Codes promocionais oferecidos pelos nossos
            parceiros. Uma forma prática e rápida de aproveitar as melhores
            ofertas, diretamente na palma da sua mão. Simples, rápido e cheio de
            benefícios!
          </Typography>
        </ArticleContainer>
        <ArticleContainer transition={{ duration: 0.6, delay: 0.6 }}>
          <Heading type="h5" size="lg" font="inter" className="mb-5">
            Simplicidade que Encanta: Acompanhe seu histórico de fidelização
          </Heading>

          <Typography size="lg">
            Explore a facilidade incomparável do Fidelion Cliente. Com uma
            interface intuitiva e funcionalidades descomplicadas, você pode
            encontrar novas ofertas, acompanhar seu histórico de fidelização, as
            promoções em que está envolvido, a disponibilidade dos seus bônus e
            muito mais!
          </Typography>
        </ArticleContainer>
      </div>
      <div className="h-10" />
    </SectionContainer>
  )
}
