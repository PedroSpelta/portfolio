import Head from "next/head";
import Abilities from "../components/Abilities/Abilities";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <div>
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
            src="/rounded.png"
            alt="profile-image"
            className="h-[150px] w-[150px]"
          />
        </div>

        {/* resume */}
      </div>
      <div className="flex flex-col items-center pb-60 text-center bg-gray-600 text-white">
        <h2 className="text-4xl pt-12 font-bold">Bem vindo!</h2>
        <h3 className="text-2xl pt-5 max-w-4xl px-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </h3>
      </div>

      
      <Abilities/>

      <div className="flex flex-col items-center pb-20 text-center text-gray-900 mt-40">
        <h2 className="text-4xl pt-12 font-bold">Meus projetos</h2>
        <h3 className="text-2xl pt-5 max-w-4xl px-6">
          Aqui estão alguns dos meus projetos realizados recentemente
        </h3>
      </div>

      <Projects />
    </div>
  );
}
