import { motion } from "framer-motion";
import { ReactNode } from "react";
import elegantAppear from "~/config/FramerMotion/framerMotion";

interface Props {
  children: ReactNode;
}

export default function SecondaryBlueBg({ children }: Props) {
  return (
    // <div className="bg-background-second-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-20 flex flex-col justify-center items-center border-b-0.8 border-separator-blue">
    //   {children}
    // </div>
    <div className="bg-background-second-blue">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 'some' }}
      >
        <motion.div
          // variants={slideInFromRight}
          variants={elegantAppear}
          className=" px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-20 flex flex-col justify-center items-center border-b-0.8 border-separator-blue"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}