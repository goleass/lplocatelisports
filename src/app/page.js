"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "./components/PortifolioCard";

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
];

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <OurServices />

      <Portifolio />
    </>
  );
}

function Header() {
  // Estado para controlar o menu de navegação (aberto ou fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent text-white py-4 z-10 relative">
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        {/* Logo */}
        <div className="col-span-2 flex items-center">
          <Image
            src="/images/logo-site-nav.png"
            alt="Logo Locateli Sports"
            width={200}
            height={100}
          />
        </div>

        {/* Menu (Para telas grandes) */}
        <nav className="col-span-8 flex items-center justify-end hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-300">
                Portifólio
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gray-300">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gray-300">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão */}
        <div className="col-span-2 flex items-center justify-end hidden md:flex">
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
        <nav className="md:hidden bg-black text-white w-full absolute top-16 left-0">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-300">
                Portifólio
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gray-300">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gray-300">
                Contato
              </a>
            </li>
            <li>
              <a
                href="#action"
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
      className="relative h-screen bg-cover bg-center mt-[-72px] content-center"
      style={{ backgroundImage: "url('/images/background-hero.png')" }}
    >
      {/* Sobreposição de cor */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Conteúdo dentro do container */}
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        {/* Coluna da esquerda */}
        <div className="col-span-6 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            A MARCA DE QUEM É <span className="text-[#00D9B9]">MASTER</span>
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Seu material 100% personalizado, em tecido dry fit com proteção UV.
            Você imagina, a gente cria
          </p>
          <a
            href="#explore"
            className="bg-[#007866] hover:bg-[#166357] text-white px-6 py-3 rounded text-lg w-fit"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>

        <div className="col-span-6 flex justify-center">
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
    <section className="py-40 relative content-center rounded-[40px] mt-[-30px] bg-[#111111]">
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-20 col-span-12 flex flex-col justify-center text-white items-center text-3xl font-bold">
          O QUE PRODUZIMOS?
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-12 gap-10"
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
    <section className="py-40 relative content-center bg-[#09080B]">
      <div
        className="container mx-auto grid grid-cols-12 gap-5"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-20 col-span-12 flex flex-col justify-center text-white items-center text-3xl font-bold">
          NOSSO PORTIFÓLIO
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-12 gap-10"
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
    <div className="p-6 col-span-4 flex flex-col justify-center text-white rounded-2xl bg-[#007866] border-b border-white">
      <h1 className="mb-3 text-2xl text-center font-semibold">{title}</h1>
      <p className="text-lg">{description}</p>
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
