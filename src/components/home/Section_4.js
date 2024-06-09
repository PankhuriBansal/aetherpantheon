import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Analytics from "@/Assets/analytics.svg";
import MacBook from "@/Assets/macbookpro.png";
import MacBookMob from "@/Assets/macbookmob.svg";
import AnalyticsMob from "@/Assets/analytics_mob.svg";
import { Row, Col } from "antd";
const Section_4 = () => {
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
    <div className="section-4">
      <div className="section4-main-container">
        <Row justify={"space-between"} align={"middle"}>
          <Col order={mobileScreen ? 2 : 1}>
            {/* for mobile screen size */}
            {mobileScreen && (
              <motion.div
                whileInView="visible"
                initial="hidden"
                variants={{
                  hidden: { x: 300, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
              >
                <Image src={MacBookMob} alt="mac-book" className="macBookMob" />
              </motion.div>
            )}
            {/* for desktop screen size */}
            {!mobileScreen && (
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
                <Image src={MacBook} alt="mac-book" className="macBook" />
              </motion.div>
            )}
          </Col>
          <Col order={mobileScreen ? 1 : 2}>
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
                <Image
                  src={Analytics}
                  alt="analytics"
                  className="analytics_img"
                />
                <Image
                  src={AnalyticsMob}
                  alt="analytics_mob"
                  className="analytics_mob"
                />
                <p className="analytics">Video Analytics</p>
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

export default Section_4;
