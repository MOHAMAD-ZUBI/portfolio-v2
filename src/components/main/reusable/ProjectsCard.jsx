import React from "react";

const ProjectsCard = () => {
  return (
    <div className=" w-[80%] bg-gradient-to-r min-h-[600px] dark:from-gray-800 overflow-hidden relative dark:zinc-200 dark:to-slate-900 from-slate-900 via-zinc-800 to-slate-700 rounded-2xl text-white p-5">
      <div className="flex flex-row just gap-5">
        <h1>Project Title</h1>
        <h1>Github</h1>
      </div>
      <div className="flex  flex-row justify-between w-full mt-12">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt, elit non cursus.
          </p>
        </div>

        <div>
          <div className=" right-[-500px]  absolute">
            <img
              src="https://www.andrewnelson.net/_next/image?url=%2Fimg%2Fmsc-mock_stack%2F01.png&w=640&q=75"
              className=" w-[1900px] h-[1000px] rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
