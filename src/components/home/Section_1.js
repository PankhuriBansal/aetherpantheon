import React from "react";
import { Button, Row, Col } from "antd";
import Rings from "@/Assets/vector.svg";
import Image from "next/image";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
import AnimatedTextWord from "../AnimatedTextWord";
import { useRouter } from "next/router";
const Section_1 = () => {
  const route = useRouter();
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
  const signUpUrl = process.env.NEXT_PUBLIC_SIGNUP_URL;
  return (
    <div className="homeContent">
      <div className="section1-main-container ">
        <Row justify={"center"} align={"middle"}>
          <div className="top">
            <AnimatedTextCharacter className="harn" text={"Harnessing"} />
            <AnimatedTextCharacter className="ai-magic" text={"AI magic"} />
          </div>
          <div>
            <AnimatedTextCharacter
              className="stun-video"
              text={"for stunning Videos"}
              delay={1}
            />
          </div>
          {/* description text for bigscreen  */}
          <div className="description-text sm-none">
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`Unleash the power of AI-driven video editing to create breathtaking`}
                delay={1.5}
              />
            </div>
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`visuals, effortlessly enhancing every frame and telling your story`}
                delay={1.5}
              />
            </div>
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`like never before.`}
                delay={1.5}
              />
            </div>
          </div>
          {/* description text for mobile sceen  */}
          <div className="description-text lg-none">
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`Unleash the power of AI-driven video editing`}
                delay={1.5}
              />
            </div>
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={` to create breathtaking visuals, effortlessly  `}
                delay={1.5}
              />
            </div>
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`enhancing every frame and telling your  `}
                delay={1.5}
              />
            </div>
            <div className="center">
              <AnimatedTextCharacter
                className="content"
                text={`story like never before.`}
                delay={1.5}
              />
            </div>
          </div>

          <span className="content"></span>
          <Button className="home-btn" onClick={() => route.push(signUpUrl)}>
            <span className="signup_txt">Signup Today</span>
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Section_1;
