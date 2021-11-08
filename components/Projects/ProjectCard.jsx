import React, { useState } from "react";

function ProjectCard(props) {
  const [isOver, setIsOver] = useState(false);
  const { description, projLink, image} = props;
  return (
    <section
      className="col-span border rounded-lg h-20 aspect-w-16 aspect-h-9 bg-black
      overflow-hidden backgrou relative"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <div className={`flex flex-col justify-center gap-8 items-center text-white text-xl font-bold absolute transition-all duration-500 ${!isOver && "!opacity-0"}`}>
        <span>{description}</span>
        <a
          className="border-white border-2 rounded-full px-6 py-1 cursor-pointer z-10"
          href={projLink}
        >
          Visitar
        </a>
      </div>
      <img
        src={image}
        alt=""
        className={`transition duration-500 opacity-100 ${
          isOver && "!opacity-0 scale-125"
        }`}
      />
    </section>
  );
}

export default ProjectCard;
