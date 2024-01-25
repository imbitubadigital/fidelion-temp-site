import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'

import { Slide } from '../Slide'
import { Typography } from '../Typography'
import Image from 'next/image'
export function SectionServicesCompany() {
  return (
    <SectionContainer
      transition={{ duration: 0.8, delay: 0.2 }}
      className="my-10"
    >
      <Heading size="lg" type="h5" color="red" className="mb-4 ">
        Serviços
      </Heading>
      <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-1">
        <div className="col-span-1 flex flex-col gap-8">
          <article>
            <div className="flex items-center py-2 px-4 gap-3 mb-2 border-l-4 border-fd-blue-500">
              <Image
                src="/device-mobile-camera.svg"
                width={32}
                height={32}
                alt="Ícone ilustrativo de um device mobile"
              />
              <Heading size="xl" type="h6" color="black" className="text-base">
                Aplicativo Fidelion Cliente
              </Heading>
            </div>
            <Typography className="mb-4">
              Maximize a visibilidade do seu negócio com no Fidelion Cliente! Ao
              ser parte da nossa plataforma, seus clientes terão acesso a
              promoções de fidelidade personalizadas, a facilidade de encontrar
              sua empresa, acompanhar pontos, descobrir ofertas no feed de
              anúncios e explorar o histórico detalhado de suas interações.
            </Typography>
            <Typography className="mb-4">
              E o mais significativo, garantindo que vale a pena continuar como
              seu cliente devido às vantagens distintas em relação aos
              concorrentes
            </Typography>
          </article>
          <article>
            <div className="flex items-center py-2 px-4 gap-3 mb-2 border-l-4 border-fd-blue-500">
              <Image
                src="/chart-line.svg"
                width={32}
                height={32}
                alt="Ícone ilustrativo de um gráfico de linha"
              />
              <Heading
                size="xl"
                type="h6"
                color="black"
                className="mb-4 text-base "
              >
                Administrativo Fidelion Empresa
              </Heading>
            </div>

            <Typography className="mb-4">
              Revolucione a gestão de fidelização com a Área Administrativa do
              Fidelion Empresa!
            </Typography>
            <Typography className="mb-4">
              Controle promoções de fidelidade, anúncios de ofertas e o
              histórico de clientes fidelizados de maneira centralizada.
            </Typography>
            <Typography className="mb-4">
              Crie QR Codes personalizados para distribuir estrategicamente aos
              clientes desejados, conectando-os rapidamente ao Fidelion Cliente.
            </Typography>
            <Typography className="mb-4 font-bold">
              Ferramenta exclusiva para checkout
            </Typography>

            <Typography className="mb-4">
              Facilite o processo de checkout com nossa plataforma web PWA! A
              leitura do QR Code no aplicativo do cliente é tudo o que precisa
              para incluí-lo nas promoções. Agilidade e conveniência em um só
              lugar.
            </Typography>
          </article>
        </div>

        <div className="col-span-2">
          <Slide />
        </div>
      </div>
    </SectionContainer>
  )
}
