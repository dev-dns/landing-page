import { fadeInVariant, fadeRightVariant } from "@/lib/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      whileInView="visible"
      className="flex h-full items-center justify-center"
    >
      <motion.div
        variants={{
          visible: {
            transition: { delayChildren: 1.8, staggerChildren: 0.7 },
          },
        }}
        className="relative"
      >
        <motion.h1
          variants={fadeRightVariant}
          className="relative select-none font-paytone text-9xl font-bold "
        >
          DEV DNS
        </motion.h1>
        <motion.p
          variants={fadeInVariant}
          className="absolute -top-5 left-0 text-2xl"
        >
          We Are
        </motion.p>
        <motion.p
          variants={fadeInVariant}
          className="absolute -bottom-10 right-0 font-japan text-2xl"
        >
          デフヂーエンエス
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
