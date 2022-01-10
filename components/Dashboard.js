import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Button, Tooltip, Typography } from "antd";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { isEmpty } from "lodash";

import styles from "./Dashboard.module.less";

const { Title } = Typography;

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const [profileList, setProfileList] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [likedList, setLikedList] = useState([]);
  const [passedList, setPassedList] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const url = `https://tinder-clone-duhoang.vercel.app/api/user?page=${page}`;
      // const url = `http://localhost:3000/api/user?page=${page}`;
      const response = await fetch(url, {});
      const data = await response.json();
      const profileList = data.map((profile) => {
        const dob = profile?.date_of_birth;
        const diffTime = Math.abs(new Date() - new Date(dob));
        const age = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
        return { ...profile, age };
      });
      setProfileList(profileList);
      setCurrentProfile({ ...profileList[0], profileNumber: 0 });
    };
    getUserList();
  }, [page]);

  const UserInfo = () => {
    return (
      currentProfile && (
        <div className="user-info">
          <Title level={4}>
            {currentProfile.first_name} {currentProfile.last_name}
          </Title>
          <Title level={5}>{currentProfile.age}</Title>
        </div>
      )
    );
  };

  const userProfileReact = (reactType) => {
    // if (reactType === "like") {
    //   setLikedList([...likedList, { ...currentProfile }]);
    // } else if (reactType === "pass") {
    //   setPassedList([...passedList, { ...currentProfile }]);
    // }

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
    if (!isEmpty(likedList)) {
      localStorage.setItem("liked", JSON.stringify(likedList));
    }
    if (!isEmpty(passedList)) {
      localStorage.setItem("passed", JSON.stringify(passedList));
    }
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
