import { Heading } from '../Heading'

import { Typography } from '../Typography'
import Image from 'next/image'
import { WelcomeContainer } from '../WelcomeContainer'

export function WelcomePlans() {
  return (
    <WelcomeContainer transition={{ duration: 0.7 }} className="gap-4">
      <div className="flex-1 flex-col">
        <div className="flex mb-7">
          <span className="flex justify-between items-center px-5 gap-1 rounded-full bg-fd-blue-500 text-fd-gray-100 m-0 font-inter h-8 font-bold text-sm">
            Receba 7 dias grátis!
          </span>
        </div>
        <Heading
          type="h2"
          size="6xl"
          color="black"
          className="leading-[4.375rem] mb-7 max-sm:text-fd-gray-800 max-lg:text-4xl"
        >
          Sua Jornada de
          <br className="max-md:hidden" /> Fidelização
          <br /> Começa Agora!
        </Heading>

        <Typography
          size="lg"
          color="gray"
          className="mb-7  max-xl:text-fd-gray-800"
        >
          Escolha um dos nossos Planos Fidelion e dê um salto em sua estratégia
          de fidelização. Personalize, monitore, e conecte-se de maneiras
          únicas. Assine hoje mesmo e descubra como transformar clientes em
          promotores leais. Sua jornada de fidelização começa aqui!
        </Typography>
      </div>
      <div className="flex-1 mt-16 max-sm:hidden">
        <Image
          src="/app-plans.png"
          width={676}
          height={507}
          alt="Área administrativa exclusiva para empresas parceiras"
          className="mx-auto"
        />
      </div>
    </WelcomeContainer>
  )
}
