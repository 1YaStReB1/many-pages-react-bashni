import React from "react";
import "./btnGitHub.css";
import gitIcon from "./gitHub-black.svg"

const BtnGitHub = ({link}) => {
  return (
    <a href={link} rel="noreferrer" target="_blank" class="btn-outline">
      <img src={gitIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
