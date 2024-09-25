import { motion } from "framer-motion";
import React from "react";

const Marque = () => {
  const data = ["ಅಥರ್ವ ಅಡ್ವೆಂಚರ್ಸ್", "ಅಥರ್ವ ಅಡ್ವೆಂಚರ್ಸ್"];
  return (
    <div className=" flex whitespace-nowrap overflow-hidden max-sm:h-[15vh]">
      {data.map((item, index) => (
        <motion.h1
          className="font-[ff] text-[15vw] tracking-[0.5vw] leading-none  py-20 font-medium pr-44 uppercase loadercolor max-sm:py-4 max-sm:pr-10"
          key={index}
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {item}
        </motion.h1>
      ))}
    </div>
  );
};

export default Marque;
