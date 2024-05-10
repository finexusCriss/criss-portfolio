import { ReactNode } from "react";
import { motion, Variants } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const elegantAppear: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

export default function MainLightBlueBg({ children }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        // variants={slideInFromRight}
        variants={elegantAppear}
        className="bg-background-light-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center items-center drop-shadow-md"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}