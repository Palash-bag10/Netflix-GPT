import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BODY_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" fixed -z-10 brightness-75">
        <img className=" h-screen object-cover md:h-auto" src={BODY_IMAGE} alt="" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </div>
  );
};

export default GptSearch;
