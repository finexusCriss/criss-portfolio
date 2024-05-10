import { motion } from "framer-motion";
import { ReactNode } from "react";
import elegantAppear from "~/config/framerMotion";

interface Props {
  children: ReactNode;
  smallVerticalPadding?: boolean;
}

export default function BodyLightBlueBg({ children, smallVerticalPadding }: Props) {
  return (
    // <div className={`bg-background-light-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 ${smallVerticalPadding? 'pt-10 pb-20' : 'py-20'} flex flex-col justify-center items-center border-b-0.8 border-separator-blue`}>
    //   {children}
    // </div>
    <div className="bg-background-light-blue">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          // variants={slideInFromRight}
          variants={elegantAppear}
          className={`px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 ${smallVerticalPadding ? 'pt-10 pb-20' : 'py-20'} flex flex-col justify-center items-center border-b-0.8 border-separator-blue`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}