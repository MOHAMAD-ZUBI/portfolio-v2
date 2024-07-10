import React from "react";
import ProjectsCard from "./reusable/ProjectsCard";

const Projects = () => {
  const projectsData = [
    {
      title: "resumeiry.tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt, elit non cursus.",
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
      img: "/assets/imgs/test4.png",
      github: "https://github.com/MOHAMAD-ZUBI/MERN-Ecommerce",
    },
  ];
  const projectData = {
    title: "resumeiry.tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt, elit non cursus.",
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
  };
  return (
    <div className="h-screen max-md:mt-[500px] mt-96">
      <div className="flex flex-col justify-center items-center tracking-tight ">
        <h1 className="md:text-[3.75rem] max-md:text-4xl font-bold ">
          Featured Projects
        </h1>
        <h2 className="tracking-tighter max-md:text-center">
          Focused on the experience, driven by the engineering.
        </h2>

        <div className=" w-full flex flex-col gap-4 items-center justify-center mt-12">
          {projectsData.map((project, index) => (
            <ProjectsCard key={index} projectData={project} />
          ))}
          {/* <ProjectsCard projectData={projectData} /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
