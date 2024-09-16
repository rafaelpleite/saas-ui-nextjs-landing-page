import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'


interface HeaderLink {
  id?: string;
  label: string;
  href?: string;
  variant?: string;
}

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'VAS ',
    description: 'Serviços de Limpeza e Portaria',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Atuação',
      },
      {
        id: 'pricing',
        label: 'Segurança e Serviços',
      },
      {
        id: 'faq',
        label: 'Contato',
        variant: 'primary',
      },
    ] as HeaderLink[],
  },
  footer: {
    copyright: (
      <>
        Feito por {' '}
        <Link href="https://github.com/rafaelpleite">Rafael Leite</Link>
      </>
    ),
    links: [
      {
        href: 'malito:valdeciodasilva1284@gmail.com',
        label: 'E-mail',
      },
      {
        href: 'https://api.whatsapp.com/send?phone=5511988221514',
        label: <FaWhatsapp size="14" />,
      },

    ],
  },
  signup: {
    title: 'VAS Serviços',
    features: [
      {
        icon: FiCheck,
        title: 'Profissionalismo',
        description: 'Nossos profissionais são altamente treinados e qualificados, garantindo excelência em cada serviço prestado.',
      },
      {
        icon: FiCheck,
        title: 'Atendimento Personalizado',
        description:
          'Oferecemos soluções sob medida, adaptadas às necessidades específicas de cada cliente e ambiente.',
      },
      {
        icon: FiCheck,
        title: 'Rapidez e Eficiência',
        description:
          'Cumprimos os prazos acordados com agilidade, sem comprometer a qualidade do serviço.',
      },
      {
        icon: FiCheck,
        title: 'Cobertura Completa',
        description:
          'Atuação em toda a Grande São Paulo, garantindo um atendimento abrangente e eficaz.',
      },
    ],
  },
}

export default siteConfig
