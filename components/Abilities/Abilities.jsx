import React from "react";
import AbilityTab from "./AbilityTab";
import BackendIcon from "./BackendIcon";
import FrontendIcon from "./FrontendIcon";
import SoftskillsIcon from "./SoftskillsIcon";

function Abilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-[-160px] px-10">
      <AbilityTab className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl pb-14 pt-8">
        <FrontendIcon fill=""/>
        <p className="text-xl font-bold">Front-end</p>
        <span className="text-center w-[75%]">Desenvolvo aplicações criativas e responsivas, focadas em solucionar problemas de maneira prática</span>
        <p className="text-lg font-bold pt-4 pb-1">Tecnologias</p>
        <span>JavaScript (ES6)</span>
        <span>React.JS</span>
        <span>Next.JS</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>TailWind</span>
        <span>Git & Github</span>
      </AbilityTab>

      <AbilityTab className=" pb-14 pt-8">
        <BackendIcon fill="black" />
        <p className="text-xl font-bold">Back-end</p>
        <span className="text-center w-[75%]">Desenvolvo código limpo, escalável, seguro e testável, utilizando banco de dados e construindo API's.</span>
        <p className="text-lg font-bold pt-4 pb-1">Tecnologias</p>
        <span>Node.JS</span>
        <span>MongoDB</span>
        <span>Mysql</span>
      </AbilityTab>

      <AbilityTab className="rounded-b-xl md:rounded-bl-none md:rounded-r-xl pb-14 pt-8" >
        <SoftskillsIcon />
        <p className="text-xl font-bold">Soft-skills</p>
        <span className="text-center w-[75%]">Trabalho de forma cooperativa, aprendendo com os erros e buscando as condições necessárias para alcançar meus objetivos. </span>
        <p className="text-lg font-bold pt-4 pb-1">Habilidades</p>
        <span>Colaboração</span>
        <span>Lógica</span>
        <span>Empatia</span>
        <span>Resiliência</span>
      </AbilityTab>
    </div>
  );
}

export default Abilities;
