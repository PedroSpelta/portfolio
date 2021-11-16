import React from "react";
import AbilityTab from "./AbilityTab";
import BackendIcon from "./BackendIcon";
import FrontendIcon from "./FrontendIcon";
import SoftskillsIcon from "./SoftskillsIcon";

function Abilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-[-160px] px-10">
      <AbilityTab className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
        <FrontendIcon fill=""/>
        <p className="text-xl font-bold">Front-end</p>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
      </AbilityTab>
      <AbilityTab>
        <BackendIcon fill="black" />
        <p className="text-xl font-bold">Back-end</p>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
      </AbilityTab>
      <AbilityTab className="rounded-b-xl md:rounded-bl-none md:rounded-r-xl" >
        <SoftskillsIcon />
        <p className="text-xl font-bold">Soft-skills</p>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
        <span>eae</span>
        <span>uhum</span>
      </AbilityTab>
    </div>
  );
}

export default Abilities;
