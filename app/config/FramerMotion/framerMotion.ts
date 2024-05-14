import { Variants } from "framer-motion";

const elegantAppear: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5
    }
  }
}

export default elegantAppear;