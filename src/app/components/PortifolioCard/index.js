import Image from "next/image";
import "./style.css";
import { useState } from "react";

const Card = () => {

  const [imageSrc, setImageSrc] = useState("/images/portifolio/1.png");

  const handleMouseEnter = () => {
    setImageSrc("/images/portifolio/bg-portifolio-card.png");
  };

  const handleMouseLeave = () => {
    setImageSrc("/images/portifolio/1.png");
  };

  return (
    <div className="container-card-portifolio">
      <div 
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {/* Wrapper */}
        <div className="wrapper">
          <Image
            className="cover-image"
            // src="/images/portifolio/1.png"
            src={imageSrc}
            alt="Cover"
            width={500}
            height={500}
          />
        </div>

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
          src="/images/portifolio/mockup-1.png"
          alt="Character"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export { Card };
