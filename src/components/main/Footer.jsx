import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiMedium,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

const socials = [
  { icon: <SiMedium size={30} />, link: "https://medium.com/@mohamadzubi" },
  { icon: <SiGithub size={30} />, link: "https://github.com/mohamad-zubi" },
  {
    icon: <SiLinkedin size={30} />,
    link: "https://www.linkedin.com/in/mohamad-zubi/",
  },
  { icon: <SiTwitter size={30} />, link: "https://twitter.com/sichiio" },
];
const Footer = () => {
  return (
    <div className=" mt-80">
      <div className="flex flex-col justify-center items-center w-full gap-4 p-12">
        <div className="flex md:flex-row flex-col w-full justify-evenly">
          <div className="px-2">
            <h2 className=" tracking-wider font-semibold dark:text-gray-400 mb-3">
              ACKNOWLEDGMENTS
            </h2>
            <div className=" flex flex-col gap-3 text-gray-500 dark:text-gray-400">
              <Link href={"https://vercel.com"} target="_blank">
                <h1 className="dark:text-white text-black text-sm flex flex-row items-center gap-2">
                  Vercel - Platform <FaExternalLinkAlt />
                </h1>
                <p className=" text-sm">For hosting this website.</p>
              </Link>
              <Link href={"https://brittanychiang.com/"} target="_blank">
                <h1 className="dark:text-white text-black text-sm flex flex-row items-center gap-2">
                  Brittany Chiang - Software Engineer <FaExternalLinkAlt />
                </h1>
                <p className=" text-sm">
                  A major inspiration to create an open source theme.
                </p>
              </Link>
            </div>
          </div>
          <div className="px-2">
            <h2 className="tracking-wider font-semibold dark:text-gray-400 max-md:mt-3 mb-3">
              LINKS
            </h2>
            <div className=" flex flex-col gap-3 dark:text-gray-400">
              <Link href={"https://resumeiry.tech"} target="_blank">
                <h1 className="dark:text-white text-sm flex flex-row items-center gap-2">
                  Resumeiry - AI Resume Builder <FaExternalLinkAlt />
                </h1>
                <p className=" text-sm dark:text-gray-400 text-gray-600">
                  I would love from you to check out my resume builder project.
                </p>
              </Link>
              <Link href={"https://mohamad-zubi.com"} target="_blank">
                <h1 className="dark:text-white text-sm flex flex-row items-center gap-2">
                  Portfolio - V1 <FaExternalLinkAlt />
                </h1>
                <p className=" text-sm dark:text-gray-400 text-gray-600">
                  Check out my first portfolio version.
                </p>
              </Link>
            </div>
          </div>
          <div className="px-2">
            <h2 className="tracking-wider max-md:mt-3 font-semibold dark:text-gray-400 mb-3">
              SOCIAL
            </h2>
            <div className=" flex flex-row gap-2 mt-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm">
          <p> This is an open-source website feel free to fork it ! </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
