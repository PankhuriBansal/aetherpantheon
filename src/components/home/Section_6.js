import Image from "next/image";
import React from "react";
import Rectangle from "@/Assets/rectangle6.png";
import Arches from "@/Assets/arches.png";
import { Row, Col } from "antd";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import { motion } from "framer-motion";
import AnimatedWordTypingEffect from "./AnimatedWordTypingEffect";
const Section_6 = () => {
  return (
    <div className="section-6">
      <Image src={Arches} alt="arches" className="arches" />

      <AnimatedTextCharacter className="testimonials" text={"Testimonials"} />
      <AnimatedTextCharacter className="people-say" text={"What people say"} />

      <div className="rectangle-box">
        {/* testimonials image animation */}
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={Rectangle} alt="rectangle" className="rect_img" />
        </motion.div>
        {/* testimonials  description text  typing animation */}
        <AnimatedWordTypingEffect
          className={"content"}
          text={`“This cutting-edge feature automatically transcribes and synchronises
          speech from your videos, making it effortless to add captions,
          subtitles, or create multilingual versions.”`}
        />

        <AnimatedTextCharacter className="writer" text={"Doug Martin"} />
      </div>
    </div>
  );
};

export default Section_6;
