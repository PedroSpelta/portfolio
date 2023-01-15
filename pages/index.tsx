import Head from "next/head";
import { useEffect } from "react";
import Abilities from "../components/Abilities/Abilities";
import ComputerDraw from "../components/ComputerDraw";
import Projects from "../components/Projects/Projects";
import Social from "../components/Social/Social";

console.log(`
███   ████  ███   ███   ████
█  █  █     █  █  █  █  █  █
███   ██    █  █  ███   █  █
█     █     █  █  █  █  █  █
█     ████  ███   █  █  ████
`);
console.log("Contact me: https://www.linkedin.com/in/pedrospelta/");

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Pedro Spelta | Portifólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-10/12 justify-center m-auto">
        {/* header */}
        <div className="flex justify-between items-center pt-9">
          <img src="/logo.png" alt="Logo" className="h-10 pt-3" />
          <div className="flex items-center justify-items-end space-x-8 text-2xl ">
            <a className="hover:text-blue-600 transform transition-all duration-500">
              Home
            </a>
            <a className="hover:text-blue-600 hidden md:inline">Sobre</a>
            <a className="hover:text-blue-600 hidden md:inline">Habilidades</a>
            <a className="hover:text-blue-600 hidden md:inline">Projetos</a>
          </div>
        </div>

        {/* presentation */}
        <div className="flex flex-col items-center text-center w-full mt-20">
          <h3 className="text-2xl font-bold my-3">Olá! Meu nome é</h3>
          <h1 className="text-4xl font-bold my-3">Pedro Spelta</h1>
          <h3 className="text-2xl my-3">
            Estudante de desenvolvimento de Software
          </h3>

          {/* <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a> */}
        </div>

        {/* profile img */}

        <div className="flex justify-center pt-5 pb-20">
          <img
            src="/perfil.jpeg"
            alt="profile-image"
            className="h-[150px] w-[150px] rounded-full"
          />
        </div>

        {/* computer img */}
        <ComputerDraw />

        {/* resume */}
      </div>
      <div className="flex flex-col items-center pb-60 text-center">
        <h2 className="text-4xl pt-12 font-bold">Sobre</h2>
        <h3 className="text-2xl pt-5 max-w-4xl px-6">
          Tudo começou na faculdade, tive uma matéria de programação e logo no
          começo percebi que um código resolvia todos aquelas fórmulas
          trabalhosas em questão de mili segundos. Depois de algum tempo comecei
          a estudar na Trybe, onde aprendemos a colaborar e desenvolver
          aplicativos web. Sou paciente, curioso e sedento para aprender a
          resolver problemas diariamente e me aprimorar com eles.
        </h3>
      </div>

      <Abilities />

      <div className="flex flex-col items-center pb-20 text-center text-gray-900 mt-40">
        <h2 className="text-4xl pt-12 font-bold">Meus projetos</h2>
        <h3 className="text-2xl pt-5 max-w-4xl px-6">
          Aqui estão alguns dos meus projetos realizados recentemente
        </h3>
      </div>

      <Projects />

      <Social />
    </div>
  );
}
