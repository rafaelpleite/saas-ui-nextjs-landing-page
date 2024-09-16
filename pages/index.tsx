import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="VAS Serviços"
        description="VAS Serviços: Limpeza, Portaria, Jardinagem e Recepção"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        {/* <FeaturesSection /> */}

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
              Soluções sob medida em <Text as="span" fontWeight="bold" color="purple.500">limpeza</Text>,&nbsp;
              <Text as="span" fontWeight="bold" color="purple.500">recepção</Text>, <Br />&nbsp;
              <Text as="span" fontWeight="bold" color="purple.500">jardinagem</Text>&nbsp;e&nbsp;
              <Text as="span" fontWeight="bold" color="purple.500">portaria</Text>&nbsp;para o seu espaço.
            </FallInPlace>
            

            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>Experiência</Em> e <Em>qualidade</Em> em serviços que <Br />
                garantem tranquilidade e excelência no seu dia a dia.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://api.whatsapp.com/send?phone=5511988221514">
                  Entre em contato
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/porteiro.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Profissionalismo',
            icon: FiSmile,
            description: 'Nossos profissionais são altamente treinados e qualificados, garantindo excelência em cada serviço prestado.',
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: 'Atendimento Personalizado',
            icon: FiSliders,
            description:
              'Oferecemos soluções sob medida, adaptadas às necessidades específicas de cada cliente e ambiente.',
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: 'Rapidez e Eficiência',
            icon: FiGrid,
            description:
              'Cumprimos os prazos acordados com agilidade, sem comprometer a qualidade do serviço.',
            iconPosition: "left",
            delay: 1,
          },
          {
            title: 'Cobertura Completa',
            icon: FiThumbsUp,
            description:
              'Atuação em toda a Grande São Paulo, garantindo um atendimento abrangente e eficaz.',
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Limpeza pós-obra">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            A VAS oferece uma limpeza detalhada para remover resíduos e sujeiras após a
            conclusão de obras, garantindo que o espaço esteja pronto para uso com total
            higiene e organização.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Limpeza leve">
        <Text color="muted" fontSize="lg">
          Ideal para manutenção de ambientes que
          necessitam de uma limpeza constante, mas
          menos intensa. Mantém o local limpo e
          agradável no dia a dia.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Portaria para condomínios"
        description=""
        avatar="/static/images/condominium.png"
        gradient={["pink.200", "purple.500"]}
      >
        Nossos profissionais de portaria são treinados para gerenciar o
        controle de entrada e saída, garantindo segurança e acolhimento
        para moradores e visitantes.
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Controle de acesso em obras"
      >
        <Text color="muted" fontSize="lg">
          Garantimos a segurança em áreas de construção, controlando o acesso
          de trabalhadores, fornecedores e visitantes, mantendo a ordem no local.
        </Text>
        <Wrap mt="8">
          {[
            "Profissionais qualificados",
            "Flexibilidade de soluções",
            "Agilidade no atendimento",
            "Segurança e tranquilidade",
            "Cobertura abrangente",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, null, 2]} title="Recepção">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Com profissionais capacitados, nosso serviço de recepção proporciona um atendimento cordial e eficiente para clientes e visitantes. Nossos recepcionistas são treinados para gerenciar fluxos de entrada, atender chamadas e oferecer suporte, garantindo uma experiência agradável e organizada.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Jardinagem">
        <Text color="muted" fontSize="lg">
          Com profissionais capacitados, nosso serviço de recepção proporciona um atendimento cordial e eficiente para clientes e visitantes. Nossos recepcionistas são treinados para gerenciar fluxos de entrada, atender chamadas e oferecer suporte, garantindo uma experiência agradável e organizada.
        </Text>
      </HighlightsItem>

    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Atuação em toda grande SP
        </Heading>
      }
      description={
        <>
          Cobrimos toda a Grande São Paulo, garantindo atendimento rápido e eficiente onde você precisar.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Components.",
          icon: FiBox,
          description:
            "All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
          variant: "inline",
        },
        {
          title: "Starterkits.",
          icon: FiLock,
          description:
            "Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "Extensively documented, including storybooks, best practices, use-cases and examples.",
          variant: "inline",
        },
        {
          title: "Onboarding.",
          icon: FiUserPlus,
          description:
            "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
          variant: "inline",
        },
        {
          title: "Feature flags.",
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: "inline",
        },
        {
          title: "Upselling.",
          icon: FiTrendingUp,
          description:
            "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
          variant: "inline",
        },
        {
          title: "Themes.",
          icon: FiToggleLeft,
          description:
            "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
          variant: "inline",
        },
        {
          title: "Generators.",
          icon: FiTerminal,
          description:
            "Extend your design system while maintaininig code quality and consistency with built-in generators.",
          variant: "inline",
        },
        {
          title: "Monorepo.",
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{" "}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Entre em contato conosco já! ☎️📞",
        href: "https://api.whatsapp.com/send?phone=5511988221514",
        action: false,
      },
    },
  };
}
