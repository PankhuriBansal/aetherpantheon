import { Collapse } from "antd";
import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const CollapseCard = ({ heading, description, opend }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const customExpandIcon = ({ isActive }) => {
    return isActive ? (
      <MinusOutlined style={{ color: "#fff", width: "24px" }} />
    ) : (
      <PlusOutlined style={{ color: "#fff", width: "24px " }} />
    );
  };

  return (
    <div className="collapse-parent">
      <Collapse
        expandIconPosition={"end"}
        expandIcon={customExpandIcon}
        onChange={toggleCollapse}
        // activeKey={opend ? "1" : "null"}
        items={[
          {
            key: "1",
            label: (
              <p
                className={`${
                  collapsed ? "sub-heading" : "bordred-sub-heading"
                }`}
              >
                {heading}
              </p>
            ),
            children: <p className="collapse-description">{description}</p>,
          },
        ]}
      />
    </div>
  );
};

export default CollapseCard;
