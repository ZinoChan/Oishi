import styles from "@styles/Home.module.css";
import Link from "next/link";
import Navbar from "@components/Navbar";
import { motion } from "framer-motion";
import { fadeIn, slideUp, zoomIn } from "@helpers/animation";

export default function Home() {
  return (
    <section
      style={{ backgroundImage: "url(/images/home-bg.jpg)" }}
      className="bg-center bg-cover w-full min-h-screen flex items-center overflow-hidden"
    >
      <Navbar />
      <div className="max-w-screen-xl px-2 mx-auto w-full">
        <div className="grid grid-cols-4 ">
          <div className="self-center md:block hidden">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="text-3xl font-main font-bold mb-4"
            >
              Wait Less
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="font-poppins leading-normal text-md text-gray-500"
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </motion.p>
          </div>
          <div className="relative text-center  md:col-span-2 col-span-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={zoomIn}
              custom={0.4}
            >
              <img src="/images/burger.png" className="mx-auto" alt="burger" />
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.9}
              className={`${styles.text_stroke} font-pacifico sm:text-9xl text-7xl text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              Tasty
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={1.2}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/menu">
                <a className=" focus:outline-none transition-all hover:shadow-btn_lg shadow-btn mt-4 px-4 py-2 font-bold rounded bg-primary text-white font-main uppercase">
                  order now
                </a>
              </Link>
            </motion.div>
          </div>
          <div className="self-center md:block hidden">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="text-3xl font-main font-bold mb-4"
            >
              Eat More
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="font-poppins leading-normal text-md text-gray-500"
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </motion.p>
          </div>
          <div className="col-span-4 text-center"></div>
        </div>
      </div>
    </section>
  );
}
