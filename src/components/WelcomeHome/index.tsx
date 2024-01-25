import { Heading } from '../Heading'

import { LinksStore } from '../LinksStore'
import { Typography } from '../Typography'
import Image from 'next/image'
import { WelcomeContainer } from '../WelcomeContainer'

export function WelcomeHome() {
  return (
    <WelcomeContainer transition={{ duration: 0.7 }} className="max-md:mt-5">
      <div className="flex-1 flex-col">
        <div className="flex mb-7">
          <span className="flex justify-between items-center px-5 gap-1 rounded-full bg-fd-red-400 text-fd-gray-100 m-0 font-inter h-8 font-bold text-sm">
            Sem Custos!
          </span>
        </div>
        <Heading
          type="h2"
          size="6xl"
          className="text-fd-gray-50 leading-[4.375rem] mb-7 max-xl:text-fd-gray-800 max-lg:text-4xl"
        >
          Baixe Agora
          <br /> e Aproveite!
        </Heading>

        <Typography
          size="lg"
          color="white"
          className="mb-7  max-xl:text-fd-gray-800"
        >
          Descubra o Fidelion. Transforme suas compras em experiências
          inesquecíveis. Baixe o aplicativo gratuitamente, encontre promoções e
          aproveite ofertas exclusivas. Descubra mais, conecte-se com o
          Fidelion.
        </Typography>

        <LinksStore />
      </div>
      <div className="flex-1 mt-16 max-sm:hidden">
        <Image
          src="/app-home.png"
          width={577}
          height={590}
          alt="Baixe o aplicativo Fidelion"
        />
      </div>
    </WelcomeContainer>
  )
}
