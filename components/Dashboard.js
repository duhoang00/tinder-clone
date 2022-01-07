import { useState } from "react";
import { Card, Row, Col, Carousel, Radio, Button, Tooltip } from "antd";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";

import styles from "./Dashboard.module.less";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Row>
        <Col>
          <Card>
            <Carousel dotPosition={"top"}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row justify="center" align="bottom">
        <Col>
          <Tooltip title="Pass">
            <Button
              shape="circle"
              icon={
                <CloseOutlined
                  style={{
                    color: "#f86871",
                    strokeWidth: "100",
                    stroke: "#f86871",
                  }}
                />
              }
              type="text"
              danger
            ></Button>
          </Tooltip>
          <Tooltip title="Like">
            <Button
              shape="circle"
              icon={
                <HeartFilled
                  style={{
                    color: "#3eebc3",
                    stroke: "#3eebc3",
                  }}
                />
              }
            ></Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
