import { ArticleContainer } from '../ArticleContainer'
import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'

import { Typography } from '../Typography'

import Image from 'next/image'

export function SectionToolsCompany() {
  return (
    <SectionContainer
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex flex-col"
    >
      <Heading size="lg" type="h3" font="inter" className="mb-5 mt-10">
        Ferramentas
      </Heading>
      <div>
        <Typography
          color="black"
          className="mb-5 text-4xl font-bold max-md:text-3xl font-sora"
        >
          Potencializando sua Estratégia de
          <br />
          Fidelização!
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5 font-medium">
          Explore uma nova era de fidelização de clientes com o Fidelion.
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5 font-medium">
          Desde a criação intuitiva de promoções de fidelidade, incluindo
          criação de QR Codes personalizados para cada promoção, até o
          acompanhamento em tempo real com gráficos detalhados, nossa plataforma
          oferece uma experiência única.
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5 font-medium">
          Seja para clientes, que podem desfrutar de ofertas exclusivas e
          acumular pontos, ou para empresas, que podem alavancar seu negócio com
          programas personalizados.
        </Typography>
        <Typography size="lg" className="max-w-2xl mb-5 font-medium">
          Só o Fidelion proporciona conexões duradouras e benefícios
          significativos.
        </Typography>
        <div className="grid grid-cols-3 gap-8 mt-12 max-lg:grid-cols-1 max-lg:gap-10">
          <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
            <Image
              src="/card-pie.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa de gráficos de relatório"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Cadastro de promoções personalizada
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Crie promoções personalizada de acordo com a estratégia do seu
              negócio. Atraia novos clientes, valorize cada preferência,
              transformando seu cliente em parceiros duradouros.
            </Typography>
          </ArticleContainer>

          <ArticleContainer transition={{ duration: 0.6, delay: 0.3 }}>
            <Image
              src="/card-pie.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa de gráficos de relatório"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Ferramenta de checkout
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Integre seus clientes à promoção com facilidade! Utilize nosso
              aplicativo de checkout para escanear o QR code único e
              intransferível contido no aplicativo do seu cliente . Com apenas
              um clique, transforme compradores em parceiros fiéis.
            </Typography>
          </ArticleContainer>

          <ArticleContainer transition={{ duration: 0.6, delay: 0.1 }}>
            <Image
              src="/card-qrcode.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa do gerador de que qr code Fidelion"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Gerador de QR Code
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Como segunda alternativa de checkout, crie QR Codes exclusivos
              para suas promoções e distribua aos clientes. Com nosso aplicativo
              cliente, eles podem realizar o próprio checkout, proporcionando
              uma experiência de compra única e conveniente.
            </Typography>
          </ArticleContainer>

          <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
            <Image
              src="/card-qrcode.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa do gerador de que qr code Fidelion"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Anúncios personalizados
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Além das campanhas de fidelização, agora você pode criar anúncios
              promocionais exclusivos. Anuncie ofertas especiais diretamente no
              feed do aplicativo do cliente e alcance um público mais amplo.
            </Typography>
          </ArticleContainer>

          <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
            <Image
              src="/card-pie.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa de gráficos de relatório"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Relatórios Fidelion
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Tenha insights valiosos sobre o engajamento dos clientes,
              permitindo ajustes estratégicos para uma fidelização ainda mais
              eficaz.
            </Typography>
          </ArticleContainer>

          <ArticleContainer transition={{ duration: 0.6, delay: 0.3 }}>
            <Image
              src="/card-line.png"
              width={357}
              height={255}
              alt="Imagem ilustrativa de uma gráfico de linha de acompanhamento da evolução de inscritos na promoção"
              className="w-full"
            />
            <Heading size="lg" type="h4" color="black" className="mb-3 mt-4">
              Gráfico
            </Heading>
            <Typography className="max-w-2xl mb-5">
              Acompanhe o impacto das suas estratégias de fidelização com os
              Gráficos Fidelion. Obtenha uma visão clara e visual do engajamento
              dos clientes, facilitando a compreensão e tomada de decisões.
            </Typography>
          </ArticleContainer>
        </div>
      </div>
    </SectionContainer>
  )
}
