import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["- Web developper ."],
      loop: true,
      typeSpeed: 200,
      deleteSpeed: 0,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        
        <h1 className="text-6xl font-bold">
        <span className="text-designColor capitalize">_____Aghiles djadoun____</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
         <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=">"
            cursorColor=""
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "As an aspiring computer science student at La Cité College, I am passionate about programming and technology. I have a strong enthusiasm for learning and exploring the vast world of computer science. With a focus on programming, I am dedicated to developing my skills and knowledge in various programming languages and frameworks. I enjoy tackling challenging problems and finding innovative solutions through coding. With a curiosity-driven mindset, I continuously seek opportunities to expand my horizons and stay updated with the latest advancements in the field. I am eager to contribute to the tech industry and make a positive impact with my programming skills."
        </p>
      </div>
    <Media />
    </div>
  );
}

export default LeftBanner