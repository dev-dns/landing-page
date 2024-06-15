import { Link } from "@inertiajs/react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeRightVariant } from "@/lib/variants";

export default function Bottombar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="fixed bottom-0 z-10 flex w-full items-center justify-between p-8"
    >
      <motion.ul
        variants={{
          visible: { transition: { delayChildren: 3.5, staggerChildren: 0.2 } },
        }}
        className="flex flex-col gap-5 text-3xl text-background/80"
      >
        <motion.li variants={fadeRightVariant}>
          <Link href="#">
            <FaFacebook />
          </Link>
        </motion.li>
        <motion.li variants={fadeRightVariant}>
          <Link href="#">
            <FaTwitter />
          </Link>
        </motion.li>
        <motion.li variants={fadeRightVariant}>
          <Link href="#">
            <AiFillInstagram />
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
