import React from "react";
const Servicecard = ({ val }) => {
  return (
    <div className=" w-[25%] flex flex-col items-center  py-10 flex-shrink-0 max-sm:w-[70%] max-sm:py-2">
      <div className="w-60  rounded-2xl mt-2   bg-zinc-800  h-[50vh] flex flex-col items-center p-3 max-sm:h-[40vh] max-sm:w-[60vw]">
        <div className="w-24 h-24 rounded-full overflow-hidden max-sm:p-1 max-sm:h-16 max-sm:w-16">
          <img
            className="w-full h-full  object-cover object-center max-sm:rounded-full"
            src={val.img}
            alt=""
          />
        </div>
        <p className="text-lg font-serif text-center mt-2 mb-4 max-sm:text-sm">
          {val.description}
        </p>
        <h1 className="font-[ff] text-4xl border-b-[1px] border-b-zinc-500 pb-2 gradient-text  max-sm:text-2xl">
          {val.title}
        </h1>
      </div>
    </div>
  );
};

export default Servicecard;
