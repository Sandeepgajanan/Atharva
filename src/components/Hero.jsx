import gsap from "gsap";
import { useEffect, useRef } from "react";
import { texts } from "../constants";

const Hero = () => {
  const logoRef = useRef(null);
  const heroRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (dets) => {
      gsap.to(logoRef.current, {
        left: dets.x,
        top: dets.y,
      });
    };
    const handleMouseEnter = () => {
      gsap.to(logoRef.current, {
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logoRef.current, {
        opacity: 0,
      });
    };

    const hero = heroRef.current;

    document.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className=" max-w-screen-xl mx-auto   select-none  max-sm:pt-6 ">
      <div className=" w-full h-[85vh] flex items-center justify-center flex-col max-sm:h-[80vh] max-sm:mb-20">
        <div className="relative  h-fit w-fit z-10 text-center" ref={heroRef}>
          {texts.map((item, index) => (
            <h1
              className="font-bold uppercase text-[12vw] leading-[10vw] font-[ff] heading max-sm:text-[18vw] max-sm:leading-[15vw] "
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
        <div
          className="h-32 absolute top-44 left-1/2 -translate-x-[50%] opacity-0 max-sm:hidden"
          ref={logoRef}
        >
          <img
            className=" h-full object-cover"
            src="https://img.icons8.com/?size=100&id=4G9sxe7bpOAr&format=png&color=000000"
            alt=""
          />
        </div>
        <div className="h-16 hidden mt-8 max-sm:flex">
          <img
            className=" h-full object-cover"
            src="https://img.icons8.com/?size=100&id=4G9sxe7bpOAr&format=png&color=000000"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
