import React from "react";
import Help from "./Help";
import Undereffect from "./Undereffect";
import { helpcontent } from "../constants";
const Helps = () => {
  return (
    <div className="w-full min-h-screen select-none mt-10  max-sm:mt-0">
      <div className="max-w-screen-lg mx-auto py-10 max-sm:py-5 max-sm:px-3">
        <h1 className="text-[5vw] font-[ff] text-center uppercase mb-10 gradient-text max-sm:text-[12vw] ">
          Explore More..
        </h1>
        <Undereffect />

        {helpcontent.map((item, index) => (
          <Help val={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Helps;
