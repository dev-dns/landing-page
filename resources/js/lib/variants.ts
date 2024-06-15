import { Variants } from "framer-motion";

export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const fadeDownVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const fadeRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const containerVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
