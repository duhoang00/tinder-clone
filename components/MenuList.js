import { useRouter } from "next/router";

import { Row, Col, Button, Tooltip } from "antd";
import { FireFilled, LikeFilled, DislikeFilled } from "@ant-design/icons";

import styles from "./MenuList.module.less";

const MenuList = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <div className={styles.menuList}>
      <Row justify="center" align="top">
        <Col>
          <Tooltip title="Passed">
            <Button
              icon={<DislikeFilled style={{ fontSize: "45px" }} />}
              size="large"
              type="link"
              onClick={() => {
                router.push("/passed");
              }}
              danger={index === "passed"}
            ></Button>
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Dashboard">
            <Button
              icon={<FireFilled style={{ fontSize: "45px" }} />}
              size="large"
              type="link"
              onClick={() => {
                router.push("/");
              }}
              danger={index === "dashboard"}
            ></Button>
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Liked">
            <Button
              icon={<LikeFilled style={{ fontSize: "45px" }} />}
              size="large"
              type="link"
              onClick={() => {
                router.push("/liked");
              }}
              danger={index === "liked"}
            ></Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default MenuList;
