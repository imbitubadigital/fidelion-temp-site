import Imagem from 'next/image'

import { Heading } from '../Heading'
import { LinkText } from '../LinkText'
import { Social } from '../Social'
import { LinksStore } from '../LinksStore'
import { FooterContainer } from '../FooterContainer'
import { ConfigCookies } from '../ConfigCookies'
export function Footer() {
  return (
    <FooterContainer transition={{ duration: 0.7 }} className="pt-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-5 max-md:flex-col max-md:gap-10">
          <div className="flex-1">
            <Imagem
              src="/logo-footer.svg"
              width={120}
              height={22}
              alt="Fidelion"
            />
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`}
              target="_blank"
              className="flex font-inter font-medium text-fd-gray-500 my-4 transition-all hover:text-fd-gray-800"
            >
              centraldeajuda@fidelion.com
            </a>
            <a
              href={`https://wa.me/55${process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP}`}
              target="_blank"
              className="flex gap-2 font-inter font-medium text-fd-gray-500 transition-all"
            >
              <Imagem
                src="/whatsapp.svg"
                width={22}
                height={22}
                alt="Whatsapp Fidelion"
                className="hover:opacity-80"
              />
              <span className="hover:text-fd-gray-800">48 99979-8531</span>
            </a>
          </div>

          <div className="flex-1">
            <Heading
              type="h6"
              size="lg"
              color="black"
              font="inter"
              className="mb-2"
            >
              Produtos
            </Heading>
            <LinkText href="/cliente" type="footer">
              Fidelion - Para clientes
            </LinkText>
            <span className="flex mb-4"></span>
            <LinkText href="/empresa" type="footer">
              Fidelion - Para empresas
            </LinkText>
          </div>

          <div className="flex-1">
            <Heading
              type="h6"
              size="lg"
              color="black"
              font="inter"
              className="mb-2"
            >
              Ajuda
            </Heading>
            <LinkText href="/central-de-ajuda/empresas" type="footer">
              FAQ
            </LinkText>
          </div>
        </div>

        <div className="flex justify-between max-md:flex-col max-md:gap-10">
          <div className="flex flex-col min-h-[80px] justify-between ">
            <div className="-ml-2 max-xl:ml-0 max-xl:mb-4">
              <Social type={'footer'} />
            </div>

            <div className="flex justify-start gap-4 max-xl:flex-col ">
              <LinkText type="terms" href="/politica-de-privacidade">
                Política de Privacidade
              </LinkText>
              <span className="max-xl:hidden">|</span>
              <LinkText type="terms" href="/termos-de-uso">
                Termos de uso
              </LinkText>
              <span className="max-xl:hidden">|</span>
              <ConfigCookies />
            </div>
          </div>
          <div className="flex flex-col min-h-[80px] justify-between items-end max-md:items-start">
            <LinksStore />
            <p className="font-inter font-medium text-sm max-md:mt-4">
              Todos os direitos reservados © Fidelion{' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <p className="text-center font-medium font-inter text-xs max-md:text-left">
          Descubra uma abordagem única para construir conexões duradouras e
          fortalecer laços significativos com seus clientes. O Fidelion
          reinventa a fidelização de clientes, oferecendo uma plataforma
          eficiente para impulsionar o crescimento do seu negócio. Experimente
          agora!
        </p>
      </div>
    </FooterContainer>
  )
}
