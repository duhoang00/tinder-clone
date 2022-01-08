import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Carousel,
  Button,
  Tooltip,
  // Image,
  Typography,
} from "antd";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";

import styles from "./Dashboard.module.less";

const { Title } = Typography;

const Dashboard = () => {
  const UserInfo = ({ name, age }) => {
    return (
      <div className="user-info">
        <Title level={1}>{name}</Title>
        <Title level={4}>{age}</Title>
      </div>
    );
  };
  return (
    <div className={styles.dashboard}>
      <Carousel dotPosition={"top"}>
        <div>
          <Image alt="Someone image" layout="fill" src={"/taylor-swift.jpg"} />
          <UserInfo name="Taylor Swift" age="32" />
        </div>
        <div>
          <Image alt="Someone image" layout="fill" src={"/selena.jpg"} />
        </div>
      </Carousel>
      <Row justify="center" align="bottom">
        <Col>
          <Tooltip title="Pass">
            <Button
              shape="circle"
              size="large"
              icon={
                <CloseOutlined
                  style={{
                    color: "#f86871",
                    strokeWidth: "100",
                    stroke: "#f86871",
                    fontSize: "45px",
                  }}
                />
              }
              type="link"
              danger
            ></Button>
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Like">
            <Button
              shape="circle"
              size="large"
              icon={
                <HeartFilled
                  style={{
                    color: "#3eebc3",
                    stroke: "#3eebc3",
                    fontSize: "45px",
                  }}
                />
              }
              type="link"
            ></Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
