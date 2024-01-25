import { ArticleContainer } from '../ArticleContainer'
import { Heading } from '../Heading'
import { LinkText } from '../LinkText'
import { LinkTextTarget } from '../LinkTextTarget'

import { Typography } from '../Typography'

import Image from 'next/image'

export function SectionCompany() {
  return (
    <section className="grid grid-cols-3 gap-8 mt-20 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:pb-10">
      <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
        <Image
          src="/cube.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          O que é o Fidelion para Empresas?
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-3">
          Fidelion para Empresas é uma ferramenta que foi construída pensando no
          seu negócio, independente do seu nicho.
        </Typography>

        <Typography color="grayLight" className="max-w-2xl mb-3">
          Composta de uma área administrativa exclusiva para sua empresa + um
          aplicativo para o seu cliente, torna-se uma solução de alta
          performance para fidelizar seus cliente de forma inteligente e
          inovadora.
        </Typography>
      </ArticleContainer>

      <ArticleContainer transition={{ duration: 0.6, delay: 0.4 }}>
        <Image
          src="/circle-half.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Área Administrativa exclusiva para sua empresa:
        </Heading>

        <Typography color="grayLight" className="max-w-2xl mb-3">
          Através de uma dashboard intuitiva, crie promoções de fidelização
          exclusivas de acordo com o seu negócio.
        </Typography>
        <Typography color="grayLight" className="max-w-2xl mb-3">
          Crie postagens promocionais que chegarão de forma direta no aplicativo
          de seus clientes fidelizados.
        </Typography>

        <Typography color="grayLight" className="max-w-2xl mb-3">
          Cadastre e gerencie colaboradores.
        </Typography>
        <Typography color="grayLight" className="max-w-2xl mb-3">
          Acompanhe o andamento e resultado de suas campanhas através de
          gráficos e indicadores.
        </Typography>
      </ArticleContainer>

      <ArticleContainer transition={{ duration: 0.6, delay: 0.6 }}>
        <Image
          src="/hexagon.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Tutoriais em vídeo
        </Heading>

        <Typography color="grayLight" className="max-w-2xl mb-3">
          Dentro da ferramenta você encontra sessão de tutoriais em vídeo,
          guiando passo a passo como utilizar e explorar as principais
          funcionalidades da ferramenta de forma clara e objetiva.
        </Typography>
        <Typography color="grayLight" className="max-w-2xl mb-3">
          Além do nosso suporte, você ainda conta com uma sessão exclusiva de
          perguntas e respostas para tirar todas as suas dúvidas.
        </Typography>
      </ArticleContainer>

      <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
        <Image
          src="/square.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Como criar sua conta e começar a utilizar o Fidelion Empresa?
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-3">
          Descubra a simplicidade do processo de cadastro no Fidelion.
          Cadastre-se de maneira rápida e fácil utilizando seu melhor e-mail.
        </Typography>

        <LinkTextTarget
          href={String(
            process.env.NEXT_PUBLIC_LINK_GO_TO_CREATE_COMPANY_ACCOUNT,
          )}
          font="sora"
          color="red"
          type="link"
        >
          Clique aqui e crie sua conta Fidelion Empresa
        </LinkTextTarget>
      </ArticleContainer>

      <ArticleContainer transition={{ duration: 0.6, delay: 0.4 }}>
        <Image
          src="/diamond.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Quanto Custa o Plano Fidelion?
        </Heading>

        <Typography color="grayLight" className="max-w-2xl mb-5">
          Quer saber mais sobre os planos disponíveis no Fidelion? Clique no
          botão abaixo e descubra as opções de fidelização que se adequão às
          suas necessidades.
        </Typography>

        <Typography color="grayLight" className="max-w-2xl mb-5">
          Escolha o Plano Perfeito para Você!
        </Typography>
        <LinkText font="sora" color="red" type="link" href={'/planos'}>
          Ver planos
        </LinkText>
      </ArticleContainer>
      <ArticleContainer transition={{ duration: 0.6, delay: 0.6 }}>
        <Image
          src="/cut-circle.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Vantagens para Usar o Fidelion na Sua Empresa:
        </Heading>

        <Typography color="grayLight" className="max-w-2xl mb-5">
          Fidelize seus Clientes de Forma Eficiente!. O Fidelion oferece
          vantagens excepcionais para empresas que desejam fortalecer os laços
          com seus clientes
        </Typography>
        <Typography className="max-w-2xl mb-3 font-bold" color="black">
          Qual o bem mais preciso e uma empresa?
        </Typography>
        <Typography color="grayLight" className="max-w-2xl mb-5">
          Com certeza seus cliente, e esta é a ferramenta perfeita não apenas
          para atrair novos cliente para o seu negócio, mas principalmente para
          mantê-los como parceiros continuos e duradouros.
        </Typography>
      </ArticleContainer>
    </section>
  )
}
