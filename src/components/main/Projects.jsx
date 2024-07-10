import React from "react";
import ProjectsCard from "./reusable/ProjectsCard";

const Projects = () => {
  const projectsData = [
    {
      title: "resumeiry.tech",
      description:
        "I developed a comprehensive web platform designed to streamline the resume creation and enhancement process, leveraging advanced AI technologies to ensure optimal results. This tool offers several useful services.",
      technologies: [
        "NextJs",
        "Typescript",
        "React Query",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Vercel",
      ],
      link: "https://resumeiry.tech",
      img: "/assets/imgs/test4.png",
      github: "",
    },
    {
      title: "MERN Stack Ecommerce",
      description:
        "The E-Commerce Supplements Website project! This website is designed for users to browse and purchase supplements.",
      technologies: [
        "NextJs",
        "Typescript",
        "React Query",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
      ],
      link: "",
      img: "/assets/imgs/e-commerce.png",
      github: "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce",
    },
    {
      title: "Real-estate Agency and platform",
      description:
        "This project aims to streamline the real estate process for both individual users and agencies, making it easier to find, list, and manage properties.",
      technologies: [
        "NextJs",
        "Typescript",
        "React Query",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Vercel",
      ],
      link: "https://alnafaz-real-estate.vercel.app/",
      img: "/assets/imgs/realestate.png",
      github: "https://github.com/MOHAMAD-ZUBI/Alnafaz-RealEstate",
    },
    {
      title: "Portfolio V1",
      description:
        "Discover my 2024 portfolio! Built with Next.js & TypeScript, showcasing projects & skills. Fast, responsive, and sleek design. Explore & get inspired!",
      technologies: [
        "NextJs",
        "Typescript",
        "React Query",
        "Tailwind CSS",
        "Vercel",
      ],
      link: "https://v1.mohamad-zubi.com",
      img: "/assets/imgs/v1-portfolio.png",
      github: "https://github.com/MOHAMAD-ZUBI/next-ts-portfolio-2024",
    },
    {
      title: "Youtube Vid Downloader",
      description:
        "This project was a great opportunity to experiment with web development technologies and to build a practical tool that many users will find useful. Feel free to explore, contribute, or use the project as a base for your own creations.",
      technologies: [
        "NextJs",

        "React Query",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Vercel",
      ],
      link: "https://loaderio.vercel.app/",
      img: "/assets/imgs/ytdownloader.png",
      github: "https://github.com/MOHAMAD-ZUBI/YT-vid-downloader",
    },
  ];
  const projectData = {
    title: "Youtube Vid Downloader",
    description:
      "This project was a great opportunity to experiment with web development technologies and to build a practical tool that many users will find useful. Feel free to explore, contribute, or use the project as a base for your own creations.",
    technologies: [
      "NextJs",

      "React Query",
      "Tailwind CSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Vercel",
    ],
    link: "https://loaderio.vercel.app/",
    img: "/assets/imgs/ytdownloader.png",
    github: "",
  };
  return (
    <div id="projects" className="max-md:mt-[500px] mt-96">
      <div className="flex flex-col justify-center items-center tracking-tight ">
        <h1 className="md:text-[3.75rem] max-md:text-4xl font-bold ">
          Featured Projects
        </h1>
        <h2 className="tracking-tighter max-md:text-center">
          Focused on the experience, driven by the engineering.
        </h2>

        <div className=" w-full h-[830px] overflow-hidden mt-12">
          <div className=" h-[830px] overflow-y-scroll lg:p-[10px]  snap-y snap-mandatory w-full box-content space-y-4 ">
            {projectsData.map((project, index) => (
              <ProjectsCard key={index} projectData={project} />
            ))}
          </div>
          {/* <ProjectsCard projectData={projectData} /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
