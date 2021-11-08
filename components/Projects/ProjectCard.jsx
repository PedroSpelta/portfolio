import React, { useState } from "react";

function ProjectCard(props) {
  const [isOver, setIsOver] = useState(false);
  const { description, projLink} = props;
  return (
    <section
      className="col-span border rounded-lg h-20 aspect-w-16 aspect-h-9 bg-black
      overflow-hidden backgrou relative"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <div className={`flex flex-col justify-center gap-8 items-center text-white text-xl font-bold absolute transition-all duration-1000 ${!isOver && "!opacity-0"}`}>
        <span>Sobre projeto</span>
        <button
          className="border-white border-2 rounded-full px-6 py-1 cursor-pointer z-10"
          onClick={() => console.log("teste")}
        >
          Visitar
        </button>
      </div>
      <img
        src="https://i.pinimg.com/originals/6c/e1/88/6ce1884eb448cd8e6ec31ec11ae28a0d.jpg"
        alt=""
        className={`transition duration-1000 opacity-100 ${
          isOver && "!opacity-0 scale-125"
        }`}
      />
    </section>
  );
}

export default ProjectCard;
