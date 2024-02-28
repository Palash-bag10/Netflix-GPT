import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BODY_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10 brightness-75">
        <img src={BODY_IMAGE} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
