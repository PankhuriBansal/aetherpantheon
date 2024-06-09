import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedWordTypingEffect = ({ text, className }) => {
  const words = text.split(" ");
  const filteredArray = words.filter((item) => item.trim() !== "");

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          controls.start("visible");
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls, hasAnimated]);

  const containerVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.12,
        delayChildren: 0.04,
        duration: 1,
      },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 3,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {filteredArray.map((word, index) => (
        <motion.span
          variants={childVariants}
          style={{ marginRight: "5px" }}
          key={index}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWordTypingEffect;
