"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiMedium,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { RiStarLine } from "react-icons/ri";
import { LuGitFork } from "react-icons/lu";

const socials = [
  { icon: <SiMedium size={30} />, link: "https://medium.com/@mozubi128" },
  {
    icon: <SiGithub size={30} />,
    link: "https://github.com/mohamad-zubi/portfolio-v2",
  },
  {
    icon: <SiLinkedin size={30} />,
    link: "https://www.linkedin.com/in/mohamad-zubi/",
  },
  { icon: <SiTwitter size={30} />, link: "https://twitter.com/sichiio" },
];
const Footer = () => {
  const [repoInfo, setRepoInfo] = useState({ forks: 0, stars: 0 });
  const owner = "MOHAMAD-ZUBI";
  const repo = "portfolio-v2";

  useEffect(() => {
    const fetchRepoInfo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repository information");
        }
        const data = await response.json();
        const repoInfo = {
          forks: data.forks_count,
          stars: data.stargazers_count,
        }; // Parse the response

        setRepoInfo(repoInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoInfo(); // Call the function to fetch repository info when the component mounts
  }, []);

  return (
    <div className=" mt-80">
      <div className="flex flex-col justify-center items-center w-full gap-4 p-12">
        <div className="flex md:flex-row flex-col w-full max-md:gap-4 justify-evenly">
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
              <Link href="/wavythreads-cli">
                <h1 className="dark:text-white text-sm flex flex-row items-center gap-2">
                  Wavythreads-cli npm package <FaExternalLinkAlt />
                </h1>
                <p className=" text-sm dark:text-gray-400 text-gray-600">
                  Checkout my latest npm package.
                </p>
              </Link>
              <Link href={"https://v1.mohamad-zubi.com"} target="_blank">
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
        <div className="mt-8 text-sm flex justify-center items-center flex-col gap-2 dark:text-gray-400">
          <p>Designed & Built by Mohamad Zubi.</p>
          <p>
            This portfolio is an{" "}
            <span className=" font-semibold dark:text-gray-200">
              <Link
                href={"https://github.com/MOHAMAD-ZUBI/portfolio-v2"}
                target="_blank"
              >
                open-source
              </Link>
            </span>{" "}
            project, contributions and feedback are welcome!{" "}
          </p>
          <div className=" flex flex-row gap-2 justify-center items-center">
            <LuGitFork size={20} /> {repoInfo?.forks}
            <RiStarLine size={20} /> {repoInfo?.stars}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
