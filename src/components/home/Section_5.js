import React from "react";
import Image from "next/image";
import Process from "@/Assets/process1.png";
import ProcessMob from "@/Assets/process_mob.svg";

import { Row, Col } from "antd";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
import AnimatedTextWord from "@/components/AnimatedTextWord";
const Section_5 = () => {
  return (
    <div className="section-5">
      <div className="section5-main-container">
        <div className="heading1">
          <div>
            <AnimatedTextWord className="process" text="Process" delay={1} />
          </div>
          <div className="smallscreen-none">
            <AnimatedTextCharacter
              className="steps"
              text="Create your posts in just 3 steps"
            />
          </div>

          <div className="bigscreen-none">
            <AnimatedTextCharacter
              className="steps"
              text="Create your posts "
            />
          </div>
          <div className="bigscreen-none">
            <AnimatedTextCharacter className="steps" text="in just 3 steps" />
          </div>
        </div>
        <Row className="heading" justify={"space-between"}>
          <Col xs={12} lg={24}>
            <Image src={Process} alt="process" className="process_img" />
            <Image src={ProcessMob} alt="process" className="process_mob" />
          </Col>
          <Col xs={12} lg={24}>
            <div className="steps-image">
              <div className="step-each">
                <span className="txt">Upload</span>
                <span className="content">
                  Upload a video/ reel to post it on all social media
                </span>
              </div>
              <div className="step-each">
                <span className="txt">Edit</span>
                {/* changed edit_text className to content here becoz it was createing an issue */}
                <span className="content">
                  Upload a video/ reel to post it on all social media
                </span>
              </div>
              <div className="step-each">
                <span className="txt">Post</span>
                <span className="content">
                  Upload a video/ reel to post it on all social media
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section_5;
