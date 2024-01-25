import { Heading } from '../Heading'

import { LinksStore } from '../LinksStore'
import { Typography } from '../Typography'
import Image from 'next/image'
import { WelcomeContainer } from '../WelcomeContainer'

export function WelcomeCustomer() {
  return (
    <WelcomeContainer transition={{ duration: 0.7 }}>
      <div className="flex-1 flex-col">
        <div className="flex mb-7">
          <span className="flex justify-between items-center px-5 gap-1 rounded-full bg-fd-red-400 text-fd-gray-100 m-0 font-inter h-8 font-bold text-sm">
            Sem custos!
          </span>
        </div>
        <Heading
          type="h2"
          size="6xl"
          color="black"
          className=" leading-[4.375rem] mb-7 max-sm:text-fd-gray-800 max-lg:text-4xl"
        >
          Baixe Agora Gratuitamente
          <br /> e Surpreenda-se!
        </Heading>

        <Typography
          size="lg"
          color="gray"
          className="mb-4 max-xl:text-fd-gray-800"
        >
          Descubra um universo de vantagens na palma da sua mão!
        </Typography>
        <Typography
          size="lg"
          color="gray"
          className="mb-4 max-xl:text-fd-gray-800"
        >
          Baixe agora o Aplicativo Fidelion Cliente e encontre promoções
          exclusivas das empresas parceiras.
        </Typography>
        <Typography
          size="lg"
          color="gray"
          className="mb-7 max-xl:text-fd-gray-800"
        >
          Acompanhe suas promoções, descubra ofertas especiais e tenha seu
          próprio QR Code para participar das melhores oportunidades.
        </Typography>

        <LinksStore />
      </div>
      <div className="flex-1 mt-16 max-sm:hidden ">
        <Image
          src="/app-client.png"
          width={349}
          height={414}
          alt="Aplicativo Fidelion"
          className="mx-auto"
        />
      </div>
    </WelcomeContainer>
  )
}
