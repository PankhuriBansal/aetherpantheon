import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      // , fontSize: "2rem"
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className={className}>
          {word}
          {"\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
