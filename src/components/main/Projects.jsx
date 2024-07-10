import React from "react";
import ProjectsCard from "./reusable/ProjectsCard";

const Projects = () => {
  return (
    <div className="h-screen mt-96">
      <div className="flex flex-col justify-center items-center tracking-tight ">
        <h1 className="md:text-[3.75rem] max-md:text-4xl font-bold ">
          Featured Projects
        </h1>
        <h2 className="tracking-tighter max-md:text-center">
          Focused on the experience, driven by the engineering.
        </h2>

        <div className=" w-full flex justify-center mt-4">
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
