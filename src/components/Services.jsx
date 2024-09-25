import React from "react";
import Undereffect from "./Undereffect";
import { service } from "../constants";
import Servicecard from "./Servicecard";

const Services = () => {
  return (
    <section className="w-full min-h-scren py-10  select-none px-10 max-sm:py-5">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-[5vw] font-[ff] text-center uppercase mb-10 gradient-text max-sm:text-[11vw]">
          Why Atharva???
        </h1>
        <Undereffect />

        <div className="mt-2 flex items-center justify-center flex-wrap gap-2 w-full h-full max-sm:flex-col  max-sm:mt-1">
          {service.map((item, index) => (
            <Servicecard key={index} val={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
