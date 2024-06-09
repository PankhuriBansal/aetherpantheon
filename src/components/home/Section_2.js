import React from "react";
import Column1 from "@/Assets/column1.png";
import Column2 from "@/Assets/column2.png";
import Col1Mob from "@/Assets/col1mob.png";
import Col2Mob from "@/Assets/col2mob.png";
import Image from "next/image";
import { Row, Col } from "antd";
import AnimatedTextWord from "@/components/AnimatedTextWord";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
const Section_2 = () => {
  return (
    <div className="section-2">
      <div className="section2_main-container">
        <Image src={Column1} alt="column1" className="column-1" />
        <Image src={Col1Mob} alt="col1mob" className="col1_mob" />
        <Row justify={"center"} align={"middle"}>
          <Col>
            <div className="center-div">
              <div>
                <AnimatedTextWord
                  className={"features"}
                  text={"Our Features"}
                  delay={1}
                />
              </div>
              {/* heading for big screen */}
              <div>
                <AnimatedTextCharacter
                  className={"revolution sm-none"}
                  text={"Revolutionise your edits with AI"}
                />
              </div>
              {/* heading for mobile screen */}
              <div>
                <AnimatedTextCharacter
                  className={"revolution lg-none"}
                  text={"Revolutionise your "}
                />
              </div>
              <div>
                <AnimatedTextCharacter
                  className={"revolution lg-none"}
                  text={"edits with AI"}
                />
              </div>
              {/* our feature description text for bigscreen */}
              <div className="description-text-bigscreen">
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"Unleash the full potential of your videos with our"}
                    delay={1}
                  />
                </div>
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={
                      "feature-packed editing tools, designed to deliver seamless"
                    }
                    delay={1}
                  />
                </div>
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"results that shine with brilliance."}
                    delay={1}
                  />
                </div>
              </div>
              {/* our feature description text for mobile Screen */}
              <div className="description-text-smallscreen">
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"Unleash the full potential of your videos"}
                    delay={1}
                  />
                </div>
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"with our feature - packed editing tools, "}
                    delay={1}
                  />
                </div>
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"designed to deliver seamless results"}
                    delay={1}
                  />
                </div>
                <div className="center-div ">
                  <AnimatedTextWord
                    className={"content"}
                    text={"that shine with brilliance."}
                    delay={1}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Image className="column_2" src={Column2} alt="column2" />
        <Image src={Col2Mob} alt="col2mob" className="col2_mob" />
      </div>
    </div>
  );
};

export default Section_2;
