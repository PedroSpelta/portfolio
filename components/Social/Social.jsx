import React, { useState } from "react";
import ArrowdownIcon from "./ArrowdownIcon";
import EmailIcon from "./EmailIcon";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import SocialIcon from "./SocialIcon";

function Social() {
  const [mini, setMini] = useState(false);
  return (
    <div className={`bg-gray-500 rounded-t-full fixed hidden xl:flex
     pb-2 left-20 flex-col gap-2 duration-700
     ${mini? "bottom-[-190px]" : "bottom-0"}
     `}>
      <ArrowdownIcon setMini={setMini} mini={mini}/>
      <SocialIcon height="18pt" width="18pt">
        <LinkedinIcon />
      </SocialIcon>
      <SocialIcon height="19pt" width="19pt">
        <GithubIcon />
      </SocialIcon>
      <SocialIcon height="21pt" width="21pt">
        <EmailIcon />
      </SocialIcon>
    </div>
  );
}

export default Social;
