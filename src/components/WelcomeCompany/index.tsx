import { ChevronRight } from 'lucide-react'
import { Heading } from '../Heading'
import { LinkButton } from '../LinkButton'
import { Typography } from '../Typography'
import Image from 'next/image'
import { LinkButtonTarget } from '../LinkButtonTarget'
import { WelcomeContainer } from '../WelcomeContainer'

export function WelcomeCompany() {
  return (
    <WelcomeContainer transition={{ duration: 0.7 }} className="gap-4">
      <div className="flex-1 flex-col">
        <div className="flex mb-7">
          <span className="flex justify-between items-center px-5 gap-1 rounded-full bg-fd-blue-500 text-fd-gray-100 m-0 font-inter h-8 font-bold text-sm">
            Receba {process.env.NEXT_PUBLIC_DAYS_FREE} dias grátis!
          </span>
        </div>
        <Heading
          type="h2"
          size="6xl"
          color="black"
          className="leading-[4.375rem] mb-7 max-sm:text-fd-gray-800 max-lg:text-4xl"
        >
          Fidelize Clientes,
          <br /> Alavanque seu Negócio,
          <br /> Gere mais Lucros!
        </Heading>

        <Typography
          size="lg"
          color="gray"
          className="mb-7 max-xl:text-fd-gray-800"
        >
          Potencialize a fidelização de seus cliente utilizando a ferramenta o
          Fidelion Empresa.
        </Typography>
        <Typography
          size="lg"
          color="gray"
          className="mb-7 max-xl:text-fd-gray-800"
        >
          Crie programas personalizados, acompanhe o histórico de interações e
          impulsione a retenção de clientes.
        </Typography>
        <Typography
          size="lg"
          color="gray"
          className="mb-7 max-xl:text-fd-gray-800"
        >
          Faça da lealdade uma estratégia e transforme clientes em verdadeiros
          defensores da sua marca.
        </Typography>
        <Typography
          size="lg"
          color="gray"
          className="mb-7 max-xl:text-fd-gray-800"
        >
          Crie sua conta e comece agora mesmo a construir conexões duradouras!
        </Typography>

        <div className="flex mb-7 max-sm:mb-0">
          <LinkButtonTarget
            href={String(
              process.env.NEXT_PUBLIC_LINK_GO_TO_CREATE_COMPANY_ACCOUNT,
            )}
            title="Comece agora"
            icon={<ChevronRight size={28} />}
          />
        </div>
      </div>
      <div className="flex-1 mt-16 max-sm:hidden">
        <Image
          src="/app-company.png"
          width={591}
          height={355}
          alt="Área administrativa exclusiva para empresas parceiras"
          className="mx-auto"
        />
      </div>
    </WelcomeContainer>
  )
}
