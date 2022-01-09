import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Button, Tooltip, Typography, Spin } from "antd";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";

import styles from "./Dashboard.module.less";

const { Title } = Typography;

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [profileList, setProfileList] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [likedList, setLikedList] = useState([]);
  const [passedList, setPassedList] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const response = await fetch(
        `https://dummyapi.io/data/v1/user?page=${page}&limit=10`,
        {
          headers: {
            "app-id": "61d94547b966a2362cf320d4",
          },
        }
      );
      const data = await response.json();
      const profileList = data.data;
      setProfileList(profileList);
      setCurrentProfile({ ...profileList[0], profileNumber: 0 });
    };
    getUserList();
  }, [page]);

  useEffect(() => {
    if (currentProfile && !currentProfile.age) {
      const updateCurrentProfileAge = async () => {
        const response = await fetch(
          `https://dummyapi.io/data/v1/user/${currentProfile?.id}`,
          {
            headers: {
              "app-id": "61d94547b966a2362cf320d4",
            },
          }
        );
        const data = await response.json();
        const dob = data?.dateOfBirth;
        const diffTime = Math.abs(new Date() - new Date(dob));
        const age = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
        if (age) {
          setCurrentProfile({ ...currentProfile, age });
        }
      };
      updateCurrentProfileAge();
    }
  }, [currentProfile]);

  const UserInfo = () => {
    return (
      currentProfile && (
        <div className="user-info">
          <Title level={4}>
            {currentProfile.firstName} {currentProfile.lastName}
          </Title>
          <Title level={5}>
            {currentProfile.age ?? <Spin size="small"></Spin>}
          </Title>
        </div>
      )
    );
  };

  const userProfileReact = (reactType) => {
    if (reactType === "like") {
      setLikedList([...likedList, { ...currentProfile }]);
    } else if (reactType === "pass") {
      setPassedList([...passedList, { ...currentProfile }]);
    }
    const nextProfileNumber = currentProfile.profileNumber + 1;
    if (nextProfileNumber < profileList.length) {
      setCurrentProfile({
        ...profileList[nextProfileNumber],
        profileNumber: nextProfileNumber,
      });
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(likedList));
    localStorage.setItem("passed", JSON.stringify(passedList));
  }, [likedList, passedList]);

  return (
    <div className={styles.dashboard}>
      <Card bordered={false}>
        {currentProfile && (
          <div key={currentProfile.id}>
            <Image
              src={currentProfile.picture ?? "/404.jpg"}
              alt="A user profile"
              layout="fill"
            />
            <UserInfo />
          </div>
        )}
      </Card>
      <Row justify="center" align="bottom">
        <Col>
          <Tooltip title="Pass">
            <Button
              onClick={() => userProfileReact("pass")}
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
              onClick={() => userProfileReact("like")}
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
