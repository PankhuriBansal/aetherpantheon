import React, { useState } from "react";
import Iphone from "@/Assets/iPhone 15 Pro.png";
import Image from "next/image";
import { Row, Col, Button, message, Input } from "antd";
import GoogleStore from "@/Assets/googleStore.png";
import AppStore from "@/Assets/appStore.png";
import LinkedIn from "@/Assets/linkedin.svg";
import Twitter from "@/Assets/twitter.svg";
import Instagram from "@/Assets/instagram.svg";
import Youtube from "@/Assets/youtube.svg";
import Download from "@/Assets/download.svg";
import IphoneMob from "@/Assets/iphone15mob.svg";
import ArrowRight from "@/Assets/arrowRight.svg";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import Link from "next/link";
import { useRouter } from "next/router";
const Section_8 = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleClick = () => {
    setEmail("");
    message.success(
      "Thank you for subscribing to receive our latest updates and news!"
    );
  };
  return (
    <div className="section-8">
      <div className="section8-main-container">
        <Row className="row_1" justify={"space-between"} align={"middle"}>
          <Col className="download-col">
            <div className="down_1">
              <div className="down_2">
                {/* footer download heading  */}
                <div className="download_txt">
                  <AnimatedTextCharacter
                    className="white-heading"
                    text={"Download"}
                    delay={0.5}
                  />

                  <AnimatedTextCharacter
                    className="white-heading"
                    text={"our"}
                    delay={1}
                  />

                  <AnimatedTextCharacter
                    className="color-heading"
                    text={"App"}
                    delay={1.5}
                  />
                </div>
                {/* footer description  */}
                <motion.div
                  className="content_txt"
                  whileInView="visible"
                  initial="hidden"
                  variants={{
                    hidden: { y: 0, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ ease: "linear", duration: 2, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <span>
                    We have covered all domains, to get the best for you and
                    your art of content creation. Download our app now to
                    unleash!
                  </span>
                </motion.div>
                <div className="blocks">
                  <Image
                    src={GoogleStore}
                    alt="googleStore"
                    className="google_store cursor-pointer"
                    onClick={() => router.push("https://play.google.com/")}
                  />
                  <Image
                    src={AppStore}
                    alt="appStore"
                    className="app_store cursor-pointer"
                    onClick={() =>
                      router.push("https://www.apple.com/in/app-store/")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form_div">
              <span className="sign_txt">
                Sign up for latest updates and news
              </span>
              <div className="enter_div">
                <Input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="form_btn" onClick={handleClick}>
                  i’m in
                </Button>
                <Button className="formbtn_mob" onClick={handleClick}>
                  <Image src={ArrowRight} />
                </Button>
              </div>
            </div>
          </Col>

          <Col>
            {/* footer iphone image animation */}
            <motion.div
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: { y: 300, opacity: 0 },
                visible: { y: [0, -200, 0], opacity: 1 },
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image src={Iphone} alt="iphone-15" className="iphone15" />
              <Image
                src={IphoneMob}
                alt="iphone-15-mob"
                className="iphone15mob"
              />
            </motion.div>
          </Col>
        </Row>
        {/* footer for desktop screen */}
        <Row className="row_2">
          <Col className="aether_txt">© 2023 Aether Technologies</Col>
          <Col className="images">
            <Image
              src={LinkedIn}
              alt="linkedin"
              className="cursor-pointer"
              onClick={() =>
                router.push("https://www.linkedin.com/company/aether-pantheon/")
              }
            />
            <Image
              src={Twitter}
              alt="twitter"
              className="cursor-pointer"
              onClick={() => router.push("https://twitter.com/")}
            />
            <Image
              src={Instagram}
              alt="instagram"
              className="cursor-pointer"
              onClick={() =>
                router.push("https://www.instagram.com/aetherpantheon/")
              }
            />
            <Image
              src={Youtube}
              alt="youtube"
              className="cursor-pointer"
              onClick={() =>
                router.push(
                  "https://www.youtube.com/channel/UCq2P-ZmUcJsix91rl9a9syQ"
                )
              }
            />
            <Link href={"/term_of_use"}>
              <span className="aether_txt">Terms of Use</span>
            </Link>
            <Link href={"/privacy_policy"}>
              <span className="aether_txt">Privacy Policy</span>
            </Link>
            <Link href={"/contact_us"}>
              <span className="aether_txt">Contact Us</span>
            </Link>
          </Col>
        </Row>
        {/* footer for mobile screen */}
        <Row className="footer-mobile">
          <Col span={24} className="images mobile-social">
            <Image
              src={LinkedIn}
              alt="linkedin"
              className="cursor-pointer"
              onClick={() =>
                router.push("https://www.linkedin.com/company/aether-pantheon/")
              }
            />
            <Image
              src={Twitter}
              alt="twitter"
              className="cursor-pointer"
              onClick={() => router.push("https://twitter.com/")}
            />
            <Image
              src={Instagram}
              alt="instagram"
              className="cursor-pointer"
              onClick={() =>
                router.push("https://www.instagram.com/aetherpantheon/")
              }
            />
            <Image
              src={Youtube}
              alt="youtube"
              className="cursor-pointer"
              onClick={() =>
                router.push(
                  "https://www.youtube.com/channel/UCq2P-ZmUcJsix91rl9a9syQ"
                )
              }
            />
          </Col>
          <Col span={24} className="mobile_tc">
            <Link href={"/term_of_use"}>
              <span className="aether_txt">Terms of Use</span>
            </Link>
            <Link href={"/privacy_policy"}>
              <span className="aether_txt">Privacy Policy</span>
            </Link>
            <Link href={"/contact_us"}>
              <span className="aether_txt">Contact Us</span>
            </Link>
          </Col>
          <Col span={24} className="aether_txt">
            © 2023 Aether Technologies
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section_8;
