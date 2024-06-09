import { Button } from "antd";
import React from "react";

const CookieComponent = ({ handleClick }) => {
  return (
    <div className="cookie-main-conatiner">
      <div className="cookie-wrapper">
        <div className="child-wrapper">
          <h1 className="cookie-heading">Fancy a cookie?</h1>
          <p className="cookie-subheading">
            We use cookies to offer you a better experience.
          </p>
        </div>
        <div className="child-wrapper mt-30">
          <div className="btn-parent">
            <div>
              <Button className="btn-secondary" onClick={handleClick}>
                REJECT
              </Button>
            </div>
            <div>
              <Button className="btn-primary" onClick={handleClick}>
                ACCEPT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieComponent;
