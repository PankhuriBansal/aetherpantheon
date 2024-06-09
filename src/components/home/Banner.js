import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Star from "../../Assets/star.svg";

const marqueeVariants = {
  animate: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Banner = () => {
  const btns = [
    "Explore",
    "Reach",
    "Transform",
    "Create",
    "Share",
    "Edit",
    "Post",
    "Explore",
    "Reach",
    "Transform",
    "Create",
    "Share",
    "Edit",
    "Post",
    "Explore",
    "Reach",
    "Transform",
    "Create",
    "Share",
    "Edit",
    "Post",
    "Explore",
    "Reach",
    "Transform",
    "Create",
    "Share",
    "Edit",
    "Post",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
      slidesToSlide: 4,
    },
  };

  return (
    <div className="banner">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="banner-main-container"
      >
        {btns?.map((btn, index) => (
          <div key={index} className="each-btn">
            <span className="btn_mobile">{btn}</span>
            <Image src={Star} alt="star" className="start-img" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
