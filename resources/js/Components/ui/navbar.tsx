import { fadeDownVariant } from "@/lib/variants";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      variants={{
        visible: {
          transition: { staggerChildren: 0.8 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      className="fixed z-10 flex w-full items-center justify-between p-8"
    >
      <motion.span className="w-[3ch]" variants={fadeDownVariant}>
        <Link href="/" className="font-paytone text-4xl font-bold leading-none">
          DEV DNS
        </Link>
      </motion.span>
      <motion.ul
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex gap-10 pr-4"
      >
        <motion.li variants={fadeDownVariant}>
          <Link href="#home">HOME</Link>
        </motion.li>
        <motion.li variants={fadeDownVariant}>
          <Link href="#about">ABOUT</Link>
        </motion.li>
        <motion.li variants={fadeDownVariant}>
          <Link href="#contact">CONTACT</Link>
        </motion.li>
        <motion.li variants={fadeDownVariant}>
          <Link href="#projects">PROJECTS</Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
