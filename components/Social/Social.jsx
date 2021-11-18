import React from "react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import SocialIcon from "./SocialIcon";

function Social() {
  return (
    <div className="fixed bottom-10 left-10 flex flex-col gap-2">
      <SocialIcon>
        <GithubIcon />
      </SocialIcon>
      <SocialIcon>
        <LinkedinIcon />
      </SocialIcon>
    </div>
  );
}

export default Social;
