import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Carousel, Button, Tooltip, Typography } from "antd";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { isEmpty } from "lodash";

import styles from "./Dashboard.module.less";

const { Title } = Typography;

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://dummyapi.io/data/v1/user?page=${page}&limit=1`,
        {
          headers: {
            "app-id": "61d94547b966a2362cf320d4",
          },
        }
      ).catch(function (error) {
        console.log("Request failed", error);
      });
      const data = await response.json();
      if (!isEmpty(data?.data)) {
        setUserList(data.data);
      }
    }
    fetchData();
  }, [page]);

  console.log({ userList });

  const UserInfo = ({ firstName, lastName, age }) => {
    return (
      <div className="user-info">
        <Title level={1}>
          {firstName} {lastName}
        </Title>
        <Title level={4}>{age}</Title>
      </div>
    );
  };

  return (
    <div className={styles.dashboard}>
      <Carousel dotPosition={"top"}>
        {userList.map((user) => (
          <div key={user?.id}>
            <Image src={user?.picture} alt="A user profile" layout="fill" />
            <UserInfo
              firstName={user?.firstName}
              lastName={user?.lastName}
              age={user.age}
            />
          </div>
        ))}
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
