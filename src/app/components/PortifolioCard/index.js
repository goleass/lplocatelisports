import Image from "next/image";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const Card = ({ mockupUrl, thumbnailUrl }) => {

  const [imageSrc, setImageSrc] = useState(thumbnailUrl);

  const cardRef = useRef(null); // Referência ao elemento .card
  const [isActive, setIsActive] = useState(false); // Estado para controlar a classe ativa
  const [isMobile, setIsMobile] = useState(false); // Estado para verificar se é mobile

  useEffect(() => {
    // Verifica se está no ambiente do cliente
    if (typeof window !== "undefined") {
      // Define se o dispositivo é móvel
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      // Observa mudanças na largura da tela
      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      // Cleanup do evento
      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Aplica o efeito apenas em dispositivos móveis

    const observerOptions = {
      root: null, // Usa o viewport como referência
      threshold: 1, // Ativa quando 100% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true); // Ativa a classe
        } else {
          setIsActive(false); // Remove a classe
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup do observer
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isMobile]); // Atualiza o efeito ao mudar para mobile

  return (
    <div className="container-card-portifolio">
      <div
        ref={cardRef}
        className={`card ${isActive ? "active" : ""}`}
        onMouseEnter={() => isMobile || setIsActive(true)} // Só aplica hover se não for mobile
        onMouseLeave={() => isMobile || setIsActive(false)}
      >

        <div className="wrapper">
          <Image
            className="cover-image"
            // src=thumbnailUrl
            src={imageSrc}
            alt="BG Mockup"
            width={500}
            height={500}
          />
        </div>

        {/* Wrapper */}
        {/* <div className="" style={{overflow: 'hidden', height:'100%', display: isActive ? 'none' : 'block'}}>
          <Image
            src={mockupUrl}
            // src={imageSrc}
            alt="BG Mockup"
            width={150}
            height={400}
          />
        </div> */}

        {/* Title */}
        {/* <Image
          className="title"
          src="/images/dark_rider-title.png"
          alt="Title"
          width={500}
          height={500}
        /> */}

        {/* Character */}
        <Image
          className="character"
          src={mockupUrl}
          alt="Character"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export { Card };
