import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="flex justify-between items-center h-12 mt-14 px-7 bg-dark-lighten">
      <p className="hidden md:block">Copyright Quami Killy &copy; 2022</p>
      <p className="block md:hidden">Killydev &copy;</p>
      <div className="flex items-center gap-3">
        <p className="hidden md:block">Contact me: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/killy10o10"
        >
          <FaGithub size={25} />
        </a>
        <a
          className="hover:text-[#1877f2] transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kingsley-okine/"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          className="hover:text-[#5a65ea] transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Quami_Killy"
        >
          <FaTwitter size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
