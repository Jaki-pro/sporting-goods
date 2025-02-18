import { motion } from "framer-motion";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import feather from "../../../assets/feather.png";
import volleyball from "../../../assets/volleyball.png";
import gloves from "../../../assets/gloves.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <div className="relative w-full bg-[#495522] py-12">
      <Carousel autoplay>
        {/* Slide 1 */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 bg-[#3c4716] backdrop-blur-lg rounded-lg shadow-lg border border-white/20 transition-transform transform hover:scale-105">
            {/* Text Section */}
            <motion.div className="text-center md:text-left flex-1" variants={fadeInLeft} initial="hidden" animate="visible">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md tracking-widest">
                Feather D-45 Premium
              </h1>
              <p className="text-lg md:text-xl text-yellow-400 font-semibold mt-2">
                50% OFF Today Only!
              </p>
              <Link to={"http://github.com/jaki-pro"}>
                <motion.button
                  className="mt-6 bg-gradient-to-r from-green-500 to-green-400 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                className="w-48 md:w-64 drop-shadow-lg"
                src={feather}
                alt="Banner"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 bg-[#3c4716] backdrop-blur-lg rounded-lg shadow-lg border border-white/20 transition-transform transform hover:scale-105">
            <motion.div className="text-center md:text-left flex-1" variants={fadeInLeft} initial="hidden" animate="visible">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md tracking-widest">
                Thai Exclusive Volleyball
              </h1>
              <p className="text-lg md:text-xl text-yellow-400 font-semibold mt-2">
                30% OFF Today Only!
              </p>
              <motion.button
                className="mt-6 bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                className="w-48 md:w-64 drop-shadow-lg"
                src={volleyball}
                alt="Banner"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 bg-[#3c4716] backdrop-blur-lg rounded-lg shadow-lg border border-white/20 transition-transform transform hover:scale-105">
            <motion.div className="text-center md:text-left flex-1" variants={fadeInLeft} initial="hidden" animate="visible">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md tracking-widest">
                Leather Cricket Batting Gloves
              </h1>
              <p className="text-lg md:text-xl text-yellow-400 font-semibold mt-2">
                40% OFF Today Only!
              </p>
              <motion.button
                className="mt-6 bg-gradient-to-r from-red-500 to-red-400 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                className="w-48 md:w-64 drop-shadow-lg"
                src={gloves}
                alt="Banner"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
