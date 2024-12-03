"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "./components/PortifolioCard";
import Star from "./icons/material-symbols_star";
import ChevronUp from "./icons/solar_alt-arrow-up-line-duotone";
import ChevronDown from "./icons/ep_arrow-down";

const ourServices = [
  {
    key: 1,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 2,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 3,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 4,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 5,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 6,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
];

const portifolio = [
  {
    key: 1,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 2,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 3,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 4,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 5,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 6,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 7,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 8,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
  {
    key: 9,
    title: "Fardamento esportivo",
    description:
      "Confeccionamos fardamentos completos para equipes esportivas, com tecidos tecnológicos e designs personalizados que garantem conforto, desempenho e durabilidade.",
  },
];

const reviews = [
  {
    key: 1,
    title: "Bruno",
    images: ["/images/reviews/1/review-1-foto1.png"],
    description:
      "Adorei o serviço de confecção de uniformes! Material de qualidade, bem acabado e tudo entregue no prazo certinho. O pessoal é super atencioso e se preocupa em atender todas as nossas necessidades. Recomendo muito para quem quer uniformes bonitos e bem feitos!",
  },
  {
    key: 2,
    title: "Bruno",
    images: ["/images/reviews/1/review-1-foto1.png"],
    description:
      "Adorei o serviço de confecção de uniformes! Material de qualidade, bem acabado e tudo entregue no prazo certinho. O pessoal é super atencioso e se preocupa em atender todas as nossas necessidades. Recomendo muito para quem quer uniformes bonitos e bem feitos!",
  },
  {
    key: 3,
    title: "Bruno",
    images: ["/images/reviews/1/review-1-foto1.png"],
    description:
      "Adorei o serviço de confecção de uniformes! Material de qualidade, bem acabado e tudo entregue no prazo certinho. O pessoal é super atencioso e se preocupa em atender todas as nossas necessidades. Recomendo muito para quem quer uniformes bonitos e bem feitos!",
  },
];

const faqs = [
  {
    question: "O que é dry-fit?",
    answer: (
      <span>
        Dry-fit é um tipo de tecido tecnológico desenvolvido para oferecer
        conforto, respirabilidade e desempenho superior durante a prática de
        atividades físicas. Ele é composto, geralmente, por fibras sintéticas
        como poliéster e elastano, e sua principal característica é a capacidade
        de absorver e evaporar rapidamente o suor, mantendo o corpo seco e
        confortável mesmo em situações de alta intensidade. <br />
        <br />
        Na Locateli Sports, utilizamos o dry-fit como um dos materiais de
        destaque para a produção de nossos uniformes esportivos personalizados.
        Com esse tecido de alta qualidade, garantimos que nossos clientes tenham
        uniformes
      </span>
    ),
  },
  {
    question: "Quais esportes vocês atendem com a confecção de uniformes?",
    answer:
      "Atendemos diversas modalidades esportivas, como futebol, vôlei, basquete, corrida, ciclismo, entre outros. Nossos uniformes são adaptados às necessidades específicas de cada esporte, garantindo conforto e desempenho.",
  },
  {
    question: "É possível personalizar completamente o design do uniforme?",
    answer:
      "Sim! Trabalhamos com personalização total, desde as cores e estampas até a inclusão de logotipos, números e nomes dos jogadores. Nossa equipe de design está à disposição para criar um uniforme único para sua equipe.",
  },
  {
    question: "Qual é o prazo de produção e entrega dos uniformes?",
    answer:
      "O prazo pode variar dependendo da quantidade e da complexidade do design solicitado. Em média, o processo leva de 15 a 30 dias úteis após a aprovação final do layout.",
  },
  {
    question: "Existe um pedido mínimo para a produção de uniformes?",
    answer:
      "Sim, trabalhamos com um pedido mínimo de 10 peças por modelo, garantindo a viabilidade da produção e mantendo nossa alta qualidade.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <OurServices />

      <Portifolio />

      <AboutUs />

      <CustumerReview />

      <FAQ />

      <Footer />
    </>
  );
}

function Header() {
  // Estado para controlar o menu de navegação (aberto ou fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-4 bg-transparent text-white py-4 z-10 relative">
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        {/* Logo */}
        <div className="w-40 md:w-60 col-span-2 flex items-center">
          <Image
            src="/images/logo-site-nav.png"
            alt="Logo Locateli Sports"
            width={500}
            height={500}
          />
        </div>

        {/* Menu (Para telas grandes) */}
        <nav className="col-span-8 items-center justify-end hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#inicio" className="hover:text-[#00D9B9] transition-all hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="#portifolio" className="hover:text-[#00D9B9] transition-all hover:underline">
                Portifólio
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#00D9B9] transition-all hover:underline">
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-[#00D9B9] transition-all hover:underline">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#00D9B9] transition-all hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5551984346437?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão */}
        <div className="col-span-2 items-center justify-end hidden md:flex">
          <a
            href="#action"
            className="bg-[#007866] text-white px-4 py-2 rounded hover:bg-[#166357]"
          >
            Orçamento
          </a>
        </div>

        {/* Menu Hamburguer (Para telas pequenas) */}
        <div className="md:hidden col-span-10 flex items-center justify-end">
          <button onClick={toggleMenu} className="text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Exibido quando o menu está aberto) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-95 h-screen text-white w-full absolute top-16 left-0">
          <ul className="flex flex-col items-center space-y-6 py-4">
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#inicio" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#portifolio" className="hover:text-gray-300">
                Portifólio
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#sobre" className="hover:text-gray-300">
                Sobre Nós
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#contato" className="hover:text-gray-300">
                Contato
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                href="https://wa.me/5551984346437?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#007866] text-white px-4 py-2 rounded hover:bg-[#166357]"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center pt-32 md:pt-0 mt-[-72px] content-center"
      style={{ 
        backgroundImage: "url('/images/background-hero.png')" 
      }}
    >
      {/* Sobreposição de cor */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Conteúdo dentro do container */}
      <div
        className="container mx-auto grid grid-cols-12 gap-5 px-4 md:px-0"
        style={{ maxWidth: "1200px" }}
      >
        {/* Coluna da esquerda */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-white items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center md:text-left">
            A MARCA DE QUEM É <span className="text-[#00D9B9]">MASTER</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-center md:text-left">
            Seu material 100% personalizado, em tecido dry fit com proteção UV.
            Você imagina, a gente cria
          </p>
          <a
            href="https://wa.me/5551984346437?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007866] hover:bg-[#166357] text-white px-6 py-3 rounded text-lg w-fit"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center">
          <Image
            src="/images/mockup-bg.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function OurServices() {
  return (
    <section
      id="services"
      className="py-16 px-4 md:py-40 relative content-center rounded-[40px] mt-[-30px] bg-[#111111]"
    >
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-20 col-span-12 flex flex-col justify-center text-white items-center text-3xl font-bold">
          O QUE PRODUZIMOS?
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-10"
        style={{ maxWidth: "1200px" }}
      >
        {ourServices.map(({ key, title, description }) => {
          return (
            <CardOurServices
              key={key}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
}

function Portifolio() {
  return (
    <section
      id="portifolio"
      className="px-4 py-16 md:py-40 relative content-center bg-[#09080B]"
    >
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-20 col-span-4 md:col-span-12 flex flex-col justify-center text-white items-center text-3xl font-bold">
          NOSSO PORTIFÓLIO
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-10"
        style={{ maxWidth: "1200px" }}
      >
        {portifolio.map(({ key, title, description }) => {
          return (
            <CardPortifolio key={key} title={title} description={description} />
          );
        })}
      </div>
    </section>
  );
}

function CardOurServices({ title, description }) {
  return (
    <div className="p-6 col-span-4 md:col-span-4 flex flex-col justify-center text-white rounded-2xl bg-[#007866] border-b border-white">
      <h1 className="mb-3 text-2xl text-center font-semibold">{title}</h1>
      <p className="text-base">{description}</p>
    </div>
  );
}

function CardPortifolio({ url }) {
  return (
    <div className="col-span-4 flex flex-col justify-center">
      <Card />
      {/* <div className="bg-red-800"> cascdacd</div> */}
    </div>
  );
}

function AboutUs() {
  return (
    <section
      id="sobre"
      className="px-4 py-16 md:py-40 relative bg-cover bg-center content-center rounded-[40px]"
      style={{ backgroundImage: "url('/images/background-hero.png')" }}
    >
      {/* Sobreposição de cor */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Conteúdo dentro do container */}
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-12"
        style={{ maxWidth: "1200px" }}
      >
        {/* Coluna da esquerda */}
        <div className="col-span-4 md:col-span-6 flex flex-col justify-center text-white">
          <h1 className="text-3xl md:text-3xl font-semibold mb-8 text-center md:text-left">Sobre Nós</h1>
          <p className="text-sm md:text-sm mb-10">
            Desde 2015, a Locateli Sports tem se dedicado a transformar a paixão
            pelo esporte em peças únicas e de alta qualidade. Somos
            especialistas na confeção de uniformes esportivos personalizados,
            atendendo equipes de todos os níveis, desde amadores até
            profissionais, com soluções que combinam conforto, durabilidade e
            estilo.
            <br />
            <br />
            Nosso compromisso é oferecer produtos que representem não apenas o
            desempenho esportivo, mas também a identidade e o espírito de cada
            time. Trabalhamos com materiais de ponta e técnicas modernas de
            produção para garantir que nossos uniformes acompanhem cada
            movimento, seja dentro de quadra, campo ou pista.
            <br />
            <br />
            Mais do que uniformes, criamos experiências. Com a Locateli Sports,
            sua equipe estará sempre preparada para vestir a vitória. Venha
            fazer parte da nossa história!
          </p>
        </div>

        <div className="col-span-4 md:col-span-6 flex justify-center">
          <Image
            src="/images/escritorio-logo.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            // className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ title, description, images }) {
  return (
    <div className="items-center p-6 col-span-4 md:col-span-4 flex flex-col justify-between text-white rounded-2xl bg-[#111111] shadow-[0_1px_15px_-5px_rgba(255,255,255,0.4)] ">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-md my-5"
          // src="/images/reviews/1/review-1-foto1.png"
          src={images[0]}
          alt="Logo Locateli Sports"
          width={200}
          height={250}
        />

        <h1 className="mb-3 text-2xl text-center font-semibold">{title}</h1>
        <p className="text-sm px-4 md:px-10 text-center">{description}</p>
      </div>

      <div className="my-5 flex items-center justify-center gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} />
        ))}
      </div>
    </div>
  );
}

function CustumerReview() {
  return (
    <section
      id="reviews"
      className="px-4 py-16 md:py-40 relative content-center bg-[#09080B]"
    >
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-20 col-span-4 md:col-span-12 flex flex-col justify-center text-white items-center text-2xl font-bold">
          FEEDBACK DE CLIENTES
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-6"
        style={{ maxWidth: "1200px" }}
      >
        {reviews.map(({ key, title, description, images }) => {
          return (
            <ReviewCard
              key={key}
              title={title}
              description={description}
              images={images}
            />
          );
        })}
      </div>
    </section>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="px-4 py-16 md:py-40 relative content-center rounded-[40px] bg-[#111111]"
    >
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-10 col-span-12 flex flex-col justify-center text-white items-center text-2xl font-bold">
          FAQ
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            <button
              className={`flex justify-between w-full text-left py-6 px-6 md:px-9 font-medium text-lg hover:bg-[#2C2C2C] ${
                activeIndex === index ? "bg-[#2C2C2C]" : "bg-[#111]"
              } transition-colors`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}

              {activeIndex !== index && <ChevronDown />}
              {activeIndex === index && <ChevronUp />}
            </button>
            <div
              className={`bg-[#2C2C2C] overflow-hidden transition-all ${
                activeIndex === index ? "max-h-screen p-4" : "max-h-0"
              }`}
            >
              <p className="text-white text-base px-5 pb-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="pt-20 relative content-center bg-[#09080B]">
      <div
        className="container px-4 md:mx-auto grid grid-cols-4 md:grid-cols-12 gap-0 md:gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-5 md:mb-20 col-span-4 md:col-start-3">
          <div className="col-span-2 flex flex-col gap-5 items-center justify-center">
            <Image
              src="/images/logo-site-nav.png"
              alt="Logo Locateli Sports"
              width={300}
              height={100}
            />

            <p className="text-center text-base">
              Somos especialistas no que fazemos. Seu material 100%
              personalidado, em tecido dry fit com proteção UV. Você imagina, a
              gente cria - A marca de quem é Master
            </p>
          </div>
        </div>
        <div className="mb-5 md:mb-20 col-span-4 md:col-span-2 flex flex-col">
          <div className="text-base font-semibold">CONTATO</div>
          <a
            href="https://wa.me/5551984346437?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
          >
            (51) 98227-7464
          </a>
          <a className="text-sm font-medium">(51) 98227-7464</a>
          <a className="text-sm font-medium">locatelisports@gmail.com</a>
        </div>
        <div className="mb-5 md:mb-20 col-span-4 md:col-span-1 flex flex-col">
          <div className="text-base font-semibold">MENU</div>
          <a href="#" className="cursor-pointer text-sm font-medium">
            Início
          </a>
          <a href="#portifolio" className="cursor-pointer text-sm font-medium">
            Portifólio
          </a>
          <a href="#services" className="cursor-pointer text-sm font-medium">
            Serviços
          </a>
          <a href="#sobre" className="cursor-pointer text-sm font-medium">
            Sobre Nós
          </a>
          <a href="#faq" className="cursor-pointer text-sm font-medium">
            FAQ
          </a>
          <a href="#contato" className="cursor-pointer text-sm font-medium">
            Contato
          </a>
        </div>
        <div className="mb-5 md:mb-20 col-span-4 md:col-span-2">
          <div className="text-base font-semibold">SIGA-NOS</div>
        </div>
      </div>

      <div className="bg-[#004F43]">
        <div
          className="container mx-auto grid grid-cols-12"
          style={{ maxWidth: "1200px" }}
        >
          <div className="my-3 col-span-12 flex flex-col justify-center items-center text-xs md:text-base">
            <div className="flex flex-col">
              <div className="text-center">
                © Copyright 2024 Todos os direitos reservados | Locateli Sports
                - CNPJ: 46.996.636/0001-36{" "}
              </div>
              <div className="text-center">
                Site desenvolvido por{" "}
                <a
                  href="https://leonardoassuncao.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline"
                >
                  Leonardo Assunção
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
