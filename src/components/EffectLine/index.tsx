import Image from 'next/image'
import { EffectImageContainer } from '../EffectImageContainer'
export function EffectLine() {
  return (
    <div
      className="w-full bg-[center_top_1rem] bg-auto bg-no-repeat max-xl:bg-contain max-md:mt-8"
      style={{ backgroundImage: `url('/curved-line.svg')` }}
    >
      <div className="flex justify-between">
        <EffectImageContainer
          transition={{ duration: 0.7, delay: 0.1 }}
          className="justify-center"
        >
          <Image
            src="/app-blue.png"
            width={330}
            height={585}
            alt="Aplicativo de checkout Fidelion"
          />
        </EffectImageContainer>

        <EffectImageContainer
          transition={{ duration: 0.7, delay: 0.4 }}
          className="justify-center relative"
        >
          <Image
            src="/app-qr-code.png"
            width={330}
            height={585}
            alt="Gerador de qr code Fidelion"
            className="absolute top-40 max-xl:top-12 max-md:-top-12"
          />
        </EffectImageContainer>

        <EffectImageContainer
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative"
        >
          <Image
            src="/dash-code.png"
            width={506}
            height={407}
            alt="Aplicativo do cliente Fidelion"
            className="absolute top-0"
          />
        </EffectImageContainer>
      </div>

      <div className="flex justify-between">
        <EffectImageContainer
          transition={{ duration: 0.7, delay: 0.7 }}
          className="justify-center relative"
        >
          <Image
            src="/app-sale.png"
            width={330}
            height={585}
            alt="Gerencie promoções no aplicativo Fidelion Cliente"
            className="absolute top-8 max-xl:static"
          />
        </EffectImageContainer>

        <EffectImageContainer
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative"
        >
          <Image
            src="/dash-collaborators.png"
            width={506}
            height={321}
            alt="Gerencie colaboradores no sistema administrativo Fidelion Empresa"
            className="absolute top-0 right-0 max-md:-top-12"
          />
        </EffectImageContainer>
      </div>
      <div className="min-h-[580px] max-xl:min-h-[20px] max-md:hidden" />
    </div>
  )
}
