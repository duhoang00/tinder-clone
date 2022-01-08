import { Row, Col, Button, Tooltip } from "antd";
import { FireFilled, LikeFilled, UserOutlined } from "@ant-design/icons";

const MenuList = () => {
  return (
    <Row>
      <Col span={8} style={{ textAlign: "right" }}>
        <Tooltip title="Liked">
          <Button
            icon={<LikeFilled style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
          ></Button>
        </Tooltip>
      </Col>
      <Col span={8} style={{ textAlign: "center" }}>
        <Tooltip title="Dashboard">
          <Button
            icon={<FireFilled style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
            danger
          ></Button>
        </Tooltip>
      </Col>
      <Col span={8} style={{ textAlign: "left" }}>
        <Tooltip title="User">
          <Button
            icon={<UserOutlined style={{ fontSize: "45px" }} />}
            size="large"
            type="link"
          ></Button>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default MenuList;
