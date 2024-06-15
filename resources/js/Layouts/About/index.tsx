import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      id="about"
      viewport={{ once: true, amount: 0.6 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-full items-center justify-center"
    >
      <p>Hello world</p>
    </motion.div>
  );
}
