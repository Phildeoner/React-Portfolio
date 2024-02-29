import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px]">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[16px] text-gray-700 uppercase tracking-wider font-semibold font-poppins">
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[18px] text-justify max-w-3xl leading-[30px]">
        I develop the front-end of websites and web applications as a frontend
        developer, which contributes to the overall success of the finished
        product. View a selection of my work under Projects. <br />
        In order to benefit other members of the developer community, I also
        enjoy contributing content that is linked to the knowledge I have
        acquired over the years in web development. Please feel free to connect
        with me or follow me on LinkedIn, where I share relevant Web Development
        and Programming stuff. <br />
        I'm interested in employment possibilities where I can grow, learn and
        contribute. Please get in touch with me if you have a suitable
        opportunity that matches my qualifications and expertise.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
