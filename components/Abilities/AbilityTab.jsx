import React from "react";

function AbilityTab(props) {
  const { title } = props;
  return (
    <section className={`col-span border min-h-full bg-white flex justify-content items-center flex-col ${props.className}`}>
      {props.children}
    </section>
  );
}

export default AbilityTab;
