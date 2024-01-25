import { ArticleContainer } from '../ArticleContainer'
import { Heading } from '../Heading'

import { Typography } from '../Typography'

import Image from 'next/image'

export function SectionCustomer() {
  return (
    <section className=" grid grid-cols-4 gap-8 mt-20 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:pb-10">
      <ArticleContainer transition={{ duration: 0.6, delay: 0.2 }}>
        <Image
          src="/cube.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Encontre promoções perto de você
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-5">
          Descubra ofertas exclusivas em estabelecimentos próximos utilizando o
          aplicativo Fidelion Cliente. Encontre descontos especiais e benefícios
          ao alcance das suas mãos. Baixe agora para vivenciar uma nova maneira
          de economizar enquanto desfruta do que há de melhor na sua região.
        </Typography>
      </ArticleContainer>
      <ArticleContainer transition={{ duration: 0.6, delay: 0.4 }}>
        <Image
          src="/hexagon.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Como ser fidelizado?
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-5">
          Descubra a simplicidade e as recompensas incríveis de ser fidelizado
          com o Fidelion Cliente. Ao se cadastrar, receba seu QR Code exclusivo,
          que é seu identificador intransferível e a chave que via te colocar
          dentro das melhores promoções. Basta apresentá-lo nas empresas
          parceiras durante suas compras para acumular pontos instantâneos.
        </Typography>
      </ArticleContainer>
      <ArticleContainer transition={{ duration: 0.6, delay: 0.6 }}>
        <Image
          src="/circle-half.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Acompanhe histórico de fidelização
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-5">
          Mantenha-se por dentro do seu progresso e das emocionantes
          oportunidades de fidelização que o Fidelion oferece. Você pode
          verificar facilmente quantas promoções está concorrendo e quantos
          pontos acumulou em sua jornada de fidelidade.
        </Typography>
      </ArticleContainer>
      <ArticleContainer transition={{ duration: 0.6, delay: 0.8 }}>
        <Image
          src="/circle.svg"
          width={48}
          height={48}
          alt="Ícone ilustrativo"
          className="mb-4"
        />
        <Heading size="lg" type="h3" color="black" className="mb-4 font-bold">
          Vantagens de ser fidelizado
        </Heading>
        <Typography color="grayLight" className="max-w-2xl mb-5">
          No Fidelion, valorizamos a lealdade e recompensamos seu compromisso.
        </Typography>
        <Typography color="grayLight" className="max-w-2xl ">
          Troque seus pontos por descontos, brindes e benefícios especiais. Seja
          recompensado(a) por sua lealdade de maneira única e personalizada.
        </Typography>
      </ArticleContainer>
    </section>
  )
}
