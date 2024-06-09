import React from "react";
import { Button, Col, Form, Input, Row, message } from "antd";
import axios from "axios";
const ContactUsForm = () => {
  const [form] = Form.useForm();
  const postData = async (val) => {
    try {
      const res = await axios.post(
        "https://aetherpantheon.com/api/contact-us/",
        val
      );
      form.resetFields();
      message.success("Your message has been sent successfully!");
    } catch (error) {
      message.error(error?.message || "Something went wrong!");
    }
  };

  /*********** this useEffect is only to call update api whenever tags added or removed *************/

  return (
    <div>
      <Col className="profile-detail">
        <Form
          form={form}
          onFinish={(value) => {
            postData(value);
            form.setFieldValue("");
          }}
        >
          <Row
            style={{ marginBottom: "30px", marginTop: "30px" }}
            align={"middle"}
            justify={"center"}
            className="main-heading text-center"
          >
            Contact Us
          </Row>

          <Row gutter={40}>
            <Col span={24}>
              <Form.Item
                label="First Name"
                name="firstName"
                labelCol={{ span: 24 }}
              >
                <Input autoComplete="off" placeholder="John" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Last Name"
                name="lastName"
                labelCol={{ span: 24 }}
              >
                <Input autoComplete="off" placeholder="doe" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                labelCol={{ span: 24 }}
              >
                <Input autoComplete="off" placeholder="+91 9987654321" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Add your mail"
                name="email"
                labelCol={{ span: 24 }}
              >
                <Input autoComplete="off" placeholder="john.doe@test.com" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                labelCol={{ span: 24 }}
              >
                <Input.TextArea
                  rows={4}
                  autoComplete="off"
                  placeholder="Write to Us"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row align={"middle"} gutter={32} className="mb-20">
            <Col>
              <Row align={"middle"} gutter={8}>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                  >
                    <path
                      d="M1.03838 5.67861L8.31141 10.6254C10.019 11.7807 10.8727 12.3583 11.7952 12.5828C12.6104 12.7812 13.4601 12.7812 14.2753 12.5828C15.1978 12.3583 16.0515 11.7807 17.7591 10.6254L24.9648 5.73296M7.4 20.6072H18.6C20.8402 20.6072 21.9603 20.6072 22.816 20.1634C23.5686 19.7731 24.1805 19.1502 24.564 18.3841C25 17.5132 25 16.3731 25 14.0929V8.12146C25 5.84125 25 4.70114 24.564 3.83022C24.1805 3.06413 23.5686 2.44128 22.816 2.05094C21.9603 1.60718 20.8402 1.60718 18.6 1.60718H7.4C5.15979 1.60718 4.03969 1.60718 3.18404 2.05094C2.43139 2.44128 1.81947 3.06413 1.43597 3.83022C1 4.70114 1 5.84125 1 8.12146V14.0929C1 16.3731 1 17.5132 1.43597 18.3841C1.81947 19.1502 2.43139 19.7731 3.18404 20.1634C4.03969 20.6072 5.15979 20.6072 7.4 20.6072Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Col>
                <Col className="m-10">
                  <span className="contact-us-text">
                    jake.ceo@aetherpantheon.com
                  </span>
                </Col>
              </Row>
            </Col>
            <Col className="m-10">
              <Row align={"middle"} gutter={8}>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M1.5 4.80162C1.5 15.7399 10.3672 24.6072 21.3056 24.6072C21.7991 24.6072 22.2883 24.5891 22.7728 24.5537C23.3288 24.5129 23.6068 24.4926 23.8598 24.3469C24.0694 24.2262 24.2681 24.0124 24.3732 23.7945C24.5 23.5315 24.5 23.2248 24.5 22.6113V19.0114C24.5 18.4955 24.5 18.2375 24.4151 18.0164C24.3401 17.821 24.2183 17.6471 24.0603 17.5099C23.8815 17.3545 23.6391 17.2663 23.1542 17.09L19.0566 15.6C18.4925 15.3949 18.2104 15.2923 17.9428 15.3097C17.7069 15.3251 17.4798 15.4056 17.2869 15.5423C17.0681 15.6974 16.9137 15.9548 16.6048 16.4695L15.5556 18.2183C12.1696 16.6848 9.42465 13.9363 7.88889 10.5516L9.6377 9.50234C10.1524 9.19351 10.4098 9.0391 10.5648 8.82031C10.7016 8.62739 10.7821 8.40032 10.7975 8.16435C10.8149 7.89674 10.7123 7.61469 10.5072 7.05058L10.5072 7.05057L9.01715 2.95295C8.84084 2.4681 8.75268 2.22566 8.59731 2.04686C8.46007 1.88891 8.28614 1.76709 8.09081 1.69209C7.86967 1.60718 7.61171 1.60718 7.09579 1.60718H3.49591C2.8824 1.60718 2.57565 1.60718 2.31264 1.734C2.09481 1.83904 1.88095 2.03781 1.76029 2.24739C1.61459 2.50043 1.59424 2.77841 1.55352 3.33438C1.51805 3.81883 1.5 4.30812 1.5 4.80162Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Col>
                <Col>
                  <span className="contact-us-text">+1 5712719267</span>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align={"middle"} gutter={8}>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                  >
                    <path
                      d="M9 21.1072C13 17.1072 17 13.5255 17 9.10718C17 4.6889 13.4183 1.10718 9 1.10718C4.58172 1.10718 1 4.6889 1 9.10718C1 13.5255 5 17.1072 9 21.1072Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11.1072C10.2624 11.1072 11.2857 10.1123 11.2857 8.88496C11.2857 7.65766 10.2624 6.66273 9 6.66273C7.73764 6.66273 6.71429 7.65766 6.71429 8.88496C6.71429 10.1123 7.73764 11.1072 9 11.1072Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Col>
                <Col className="m-10">
                  <span className="contact-us-text">
                    Leesburg va United States 20175 
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button className="primaryBtn" htmlType="submit">
                <span> send mail </span>
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default ContactUsForm;
