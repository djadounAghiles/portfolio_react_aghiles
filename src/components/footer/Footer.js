import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-2 md:grid-cols-3 lgl:grid-cols-5 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/djadounAghiles" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:djadoun26aghiles@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/aghiles-djadoun-656b9327a//" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer