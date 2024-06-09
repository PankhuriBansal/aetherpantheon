import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import icon from "@/Assets/section311icon.svg";
import MacBook from "@/Assets/section311desktop.svg";
import MacBookMob from "@/Assets/section311mobile.svg";
import iconMobile from "@/Assets/section311iconMob.svg";
import { Row, Col } from "antd";
const Section_311 = () => {
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
          <Col>
            <motion.div
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: { x: -200, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }}
              className="content-div"
            >
              <div className="heading_div">
                <Image src={icon} alt="analytics" className="analytics_img" />
                <Image
                  src={iconMobile}
                  alt="analytics_mob"
                  className="analytics_mob"
                />
                <p className="analytics">Content Distribution</p>
              </div>
              <p className="content">
                Upload your content in multiple formats translated to a variety
                of languages across a multitude of social media platforms all
                within a single click. Reaching a larger audience with the same
                content. Posted in optimal accordance with each platforms
                algorithm.
              </p>
            </motion.div>
          </Col>

          <Col>
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
                  hidden: { x: 600, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}
              >
                <Image src={MacBook} alt="mac-book" className="macBook" />
              </motion.div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section_311;
