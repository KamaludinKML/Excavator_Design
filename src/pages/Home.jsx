import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import state from "../store";
import { CustomButton } from "../components";
import SocialMediaLink from "./Social"; // Import the new component

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home">
            <motion.div className="absolute top-1 -right-full bg-none p-1 rounded  flex items-center text-base"  {...slideAnimation("down")}>
              <SocialMediaLink
                href="https://www.instagram.com/unitedtractorsofficial?igsh=dTI2d20ydmxlaTJ0"
                icon={<FaInstagram className="mr-1 size-8" />}
                label=""
              />
              <SocialMediaLink
                href="https://www.facebook.com/ptunitedtractorstbk?mibextid=ZbWKwL"
                icon={<FaSquareFacebook  className="mr-1 size-8" />}
                label=""
              />
              <SocialMediaLink
                href="https://www.youtube.com/@unitedtractors"
                icon={<IoLogoYoutube  className=" size-8"/>}
                label=""
              />
              </motion.div>
          <motion.header {...slideAnimation("left")}>
            <img src="UT.png" alt="logo" className="w-72 object-contain" />
            {/* Social Media Links Box */}
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Customize <br className="xl:block hidden" /> Excavator
              </h1>
            </motion.div>                 
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-9"
            >
              <p className="max-w-md font-normal text-yellow-600 text-base">
                Create your Unique and exclusive shirt with our brand-new 3D
                customization tool. <strong> Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
           
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
