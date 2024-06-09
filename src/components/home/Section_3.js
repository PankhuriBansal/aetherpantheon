import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import ipad2 from "@/Assets/ipad2.png";
import iPhone from "@/Assets/iphone13.png";
import Setting from "@/Assets/setting.svg";
import Section3Mob from "@/Assets/section3_mob.svg";
import Section3Combine from "@/Assets/section3_combine.svg";
import SettingMob from "@/Assets/settings_mob.svg";
const Section_3 = () => {
  const [mobileScreen, setMobileScreen] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      setMobileScreen(isMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="section-3">
      <div className="section3-main-container">
        <Row justify={"space-between"} align={"middle"}>
          {mobileScreen && (
            // mobile screen
            <Col className="image_col">
              <motion.div
                whileInView="visible"
                initial="hidden"
                variants={{
                  hidden: { x: -300, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  className="section_3_mob"
                  src={Section3Mob}
                  alt="section3_mob"
                />
              </motion.div>
            </Col>
          )}
          {!mobileScreen && (
            // desktop screen
            <Col className="image_col">
              <motion.div
                whileInView="visible"
                initial="hidden"
                variants={{
                  hidden: { x: -600, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={Section3Combine}
                  alt="section3Com"
                  className="section3_comb_desk"
                />
              </motion.div>
            </Col>
          )}
          <Col style={{ height: "100%" }}>
            <motion.div
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: { x: 200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }}
              className="content-div"
            >
              <div className="heading_div">
                <Image src={SettingMob} alt="setting" className="setting_mob" />
                <Image src={Setting} alt="setting" className="setting" />
                <p className="processing">Video Processing</p>
              </div>
              <p className="content">
                This service will create a metadata for every video that we will
                be using to add things to an existing video. For this, first we
                will start with identifying some broad categories, getting
                defining features of those categories, and then creating a model
                that can automatically do the same. Once this is done, this will
                be linked with the Analytics to get the relevant hashtags.
              </p>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section_3;
