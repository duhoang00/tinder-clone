import { useRouter } from "next/router";

import { Row, Col, Button, Tooltip } from "antd";
import { FireFilled, LikeFilled, DislikeFilled } from "@ant-design/icons";

const MenuList = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <Row>
      <Col span={10} style={{ textAlign: "right" }}>
        <Tooltip title="Passed">
          <Button
            icon={
              <DislikeFilled style={{ fontSize: "45px", height: "auto" }} />
            }
            size="large"
            type="link"
            onClick={() => {
              router.push("/passed");
            }}
            danger={index === "passed"}
          ></Button>
        </Tooltip>
      </Col>
      <Col span={4} style={{ textAlign: "center" }}>
        <Tooltip title="Dashboard">
          <Button
            icon={<FireFilled style={{ fontSize: "45px", height: "auto" }} />}
            size="large"
            type="link"
            onClick={() => {
              router.push("/");
            }}
            danger={index === "dashboard"}
          ></Button>
        </Tooltip>
      </Col>
      <Col span={10} style={{ textAlign: "left", height: "auto" }}>
        <Tooltip title="Liked">
          <Button
            icon={<LikeFilled style={{ fontSize: "45px", height: "auto" }} />}
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
  );
};

export default MenuList;
