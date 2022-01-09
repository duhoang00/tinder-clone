import { useRouter } from "next/router";

import { Row, Col, Button, Tooltip } from "antd";
import {
  FireFilled,
  LikeFilled,
  UserOutlined,
  DislikeFilled,
} from "@ant-design/icons";

const MenuList = () => {
  const router = useRouter();

  return (
    <Row>
      <Col span={10} style={{ textAlign: "right" }}>
        <Tooltip title="Passed">
          <Button
            icon={<DislikeFilled style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
            onClick={() => {
              router.push("/passed");
            }}
          ></Button>
        </Tooltip>
      </Col>
      <Col span={4} style={{ textAlign: "center" }}>
        <Tooltip title="Dashboard">
          <Button
            icon={<FireFilled style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
            onClick={() => {
              router.push("/");
            }}
          ></Button>
        </Tooltip>
      </Col>
      <Col span={10} style={{ textAlign: "left" }}>
        <Tooltip title="Liked">
          <Button
            icon={<LikeFilled style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
            onClick={() => {
              router.push("/liked");
            }}
          ></Button>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default MenuList;
