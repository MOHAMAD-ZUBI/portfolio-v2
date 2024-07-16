import { TailwindButton } from "@/components/ui/Buttons";
import Link from "next/link";
import React from "react";
import { SiGithub, SiNpm } from "react-icons/si";

const page = () => {
  return (
    <div className="min-h-screen max-w-[1050px] mx-auto md:px-4 max-md:px-2 ">
      <main className="container mx-auto p-6">
        <h1 className="text-4xl max-md:text-2xl font-bold text-center my-8">
          🚀 WavyThreads CLI 🚀
        </h1>
        <p className="text-lg mb-4">
          I am thrilled to announce the release of{" "}
          <strong>WavyThreads CLI</strong>, a powerful command-line tool
          designed to streamline the process of setting up backend projects with
          user authentication! 🎉
        </p>
        <p className="text-lg mb-4">
          WavyThreads CLI helps you quickly scaffold and initialize backend
          projects using Node.js, Express, MongoDB, bcrypt for password hashing,
          and JWT for authentication tokens. It&apos;s an all-in-one solution to
          jumpstart your backend development.
        </p>
        <h2 className="text-2xl font-semibold my-4">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Quick Project Initialization: Set up a new project with a single
            command.
          </li>
          <li>
            Structured Project Setup: Organized folders for Controllers,
            Middlewares, Models, Routes, and the main application entry point.
          </li>
          <li>
            Automatic Dependency Installation: Automatically installs necessary
            dependencies including Express, Mongoose, bcrypt, dotenv, nodemon,
            and jsonwebtoken.
          </li>
          <li>
            Environment Configuration: Creates a <code>.env</code> file with
            MongoDB connection URI, port, and JWT secret.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold my-4">Installation:</h2>
        <div className="max-w-[400px]">
          <pre className="dark:bg-gray-800 bg-gray-200  p-4 rounded mb-4">
            <code>npm install -g wavythreads-cli</code>
          </pre>
          <h2 className="text-2xl font-semibold my-4">Usage:</h2>
          <pre className="dark:bg-gray-800 bg-gray-200  p-4 rounded mb-4">
            <code>wavythreads-cli init &lt;project-name&gt;</code>
          </pre>
          <h2 className="text-2xl font-semibold my-4">
            Start your project with:
          </h2>
          <pre className="dark:bg-gray-800 bg-gray-200  p-4 rounded mb-4">
            <code>npm start</code>
          </pre>
        </div>
        <p className="text-lg mb-4">
          This CLI tool is designed to save you time and effort, allowing you to
          focus on building amazing features for your applications.
        </p>
        <h2 className="text-2xl font-semibold my-4">Contribute:</h2>
        <p className="text-lg mb-4">
          Your feedback and contributions are highly valued! Feel free to open
          issues or submit pull requests on GitHub.
        </p>
        <div className="flex flex-row gap-4 max-md:text-xs justify-center items-center">
          <div className="text-center my-8">
            <Link
              href="https://www.npmjs.com/package/wavythreads-cli"
              target="_blank"
            >
              <TailwindButton
                content={`View on NPM `}
                icon={<SiNpm className=" text-[#CD1313]" />}
              />
            </Link>
          </div>
          <div className="text-center my-8">
            <Link
              href="https://github.com/mohamad-zubi/wavythreads-cli"
              target="_blank"
            >
              <TailwindButton content={`View on Github `} icon={<SiGithub />} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
