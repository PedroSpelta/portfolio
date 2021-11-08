import React from "react";

function AbilityTab(props) {
  return (
    <section className={`col-span border h-28 bg-white flex justify-content items-center flex-col ${props.className}`}>
      {props.children}
    </section>
  );
}

export default AbilityTab;
