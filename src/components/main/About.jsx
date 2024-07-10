import React from "react";
import { GiMeshNetwork } from "react-icons/gi";
import InfoCard from "./reusable/InfoCards";
import Image from "next/image";

const TechInfo = () => {
  return (
    <div id="about" className=" h-screen relative -mt-32 mb-32">
      <div className=" z-50">
        <div className="flex flex-col w-full items-center h-full">
          <p className=" max-md:text-sm text-gray-600 font-bold">HARDSKILLS</p>
          <h1 className="md:text-[3.75rem]  text-3xl font-bold mt-4">
            About Me
          </h1>
          <p className=" font-bold text-gray-600  max-md:text-sm mt-4 text-center">
            As a creative technologist, I craft intuitive digital experiences
            using a diverse set of tools and languages.
          </p>
        </div>

        <div className="mt-32 flex flex-row w-full justify-between">
          <div className=" flex flex-col justify-evenly gap-5 mt-4">
            <div className=" bg-white  border-[1px] border-gray-200 dark:bg-[#0E0F11] rounded-3xl max-w-[600px] gap-4 p-8 flex flex-col justify-start">
              <GiMeshNetwork className="text-gray-500" size={38} />
              <h1 className="font-bold dark:text-gray-200 text-xl">
                Polymath foundations
              </h1>
              <p className=" text-gray-500 ">
                {" "}
                With a strong foundation in both design and development, I bring
                a unique perspective to every project and am constantly learning
                and evolving to stay up-to-date with the latest industry trends.
              </p>
            </div>
            <InfoCard />
          </div>
        </div>
      </div>
      <div className=" absolute mt-32 xl:-right-64 top-0 -z-30  ">
        <Image
          alt="Mohamad Zubi - globe.svg"
          width={0}
          height={0}
          sizes="100vw"
          priority={false}
          fetchPriority="idle"
          className=" w-[1920px] h-[1080px] "
          src="https://www.andrewnelson.net/img/dataism-24.svg"
        />
      </div>
    </div>
  );
};

export default TechInfo;
