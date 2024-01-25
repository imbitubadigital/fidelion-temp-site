import { Typography } from '../Typography'
import { LinksStore } from '../LinksStore'

import { Heading } from '../Heading'

export function SectionMoreCompany() {
  return (
    <section className="pt-12">
      <Heading type="h4" size="xl">
        Aplicativo
      </Heading>
      <p className="font-bold text-fd-gray-50 text-4xl mt-10">
        Lorem ipsum dolor sit
        <br /> amet consectetur.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-12 max-lg:grid-cols-1 max-lg:gap-20">
        <article>
          <Heading type="h5" size="xl" className="mb-5">
            Acumule Pontos, Ganhe Recompensas: Baixe o Fidelion e Comece a
            Juntar Pontos!
          </Heading>

          <Typography className="mb-8">
            Baixe o Fidelion para começar a acumular pontos instantaneamente. A
            cada escaneamento do seu QR Code em estabelecimentos parceiros, você
            adiciona pontos à sua conta. Baixe agora e veja como suas compras
            diárias se transformam em vantagens exclusivas.
          </Typography>
          <LinksStore type="light" />
        </article>

        <article>
          <Heading type="h5" size="xl" className="mb-5">
            Transforme Seu Celular em Sua Chave de Fidelização: Baixe o Fidelion
            Agora!
          </Heading>

          <Typography>
            Descubra a magia do seu QR Code exclusivo ao baixar o Fidelion. Este
            pequeno código se torna a sua chave para um mundo de promoções,
            pontos acumulados e recompensas personalizadas. Baixe agora e
            transforme seu celular em uma poderosa ferramenta de fidelização.
          </Typography>
        </article>
        <article>
          <Heading type="h5" size="xl" className="mb-5">
            Simplicidade que Encanta: Baixe o Fidelion e Descubra o Fácil que
            Pode Ser Incrível!
          </Heading>

          <Typography>
            Experimente a simplicidade incomparável do Fidelion. Com uma
            interface intuitiva e funcionalidades descomplicadas, baixar e usar
            o aplicativo é fácil para todos. Baixe agora e descubra como a
            fidelização pode ser uma experiência incrivelmente simples e
            gratificante.
          </Typography>
        </article>
      </div>
      <div className="h-12" />
    </section>
  )
}
