import React, { useState } from "react";
import Image from "next/image";
import { Button, Col, Row } from "antd";
import Aether from "@/Assets/aether_img.svg";
import Logo from "@/Assets/logo.png";
import Login from "@/Assets/login.svg";
import Menu from "@/Assets/menu.svg";
import { useRouter } from "next/router";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  const route = useRouter();
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

  return (
    <div className="header">
      <div className="header-main-container">
        <Row className="row" justify={"space-between"} align={"middle"}>
          <Col
            className="logo_container cursor-pointer"
            onClick={() => route.push("/")}
          >
            <Image src={Logo} alt="logo" className="logo" />
            <Image src={Aether} alt="aether" className="aether" />
          </Col>

          <Col>
            <div className="header-btn">
              <Button
                className="login-btn"
                onClick={() => route.push(loginUrl)}
              >
                <Image src={Login} alt="login" />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
