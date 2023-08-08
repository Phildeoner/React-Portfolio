import { motion } from "framer-motion";
import { styles } from "../styles";
import { photo, home } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-100vw">
        <img
          src={home}
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>

      <section
        id="home"
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[200px] top-[150px] 
          lg:top-[200px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#1b1b1b] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack mb-3 font-poppins uppercase`}>
              Hi, I'm{" "}
            </h1>
            <p
              className="sm:text-eerieBlack sm:text-[27px] md:text-[40px]
                text-eerieBlack text-[22px] font-mova
                font-extrabold uppercase drop-shadow-2xl">
              Yakubu Bobai Ephraim
            </p>

            <p className="md:w-[500px] md:text-[25px] font-semibold text-white bg-[#00000059] p-2 rounded-r-[35px] drop-shadow-lg lg:text-eerieBlack lg:bg-transparent">
              A Frontend web Developer and Mentor, a clean code enthusiast going
              extra mile to ensure SOLID principles are upheld when contributing
              to open source.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        <div
          className="absolute bottom-8 w-full 
          flex justify-center z-10 items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            h-[70vh] md:h-[70vh] xl:h-[80vh]"
            src={photo}
            alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
