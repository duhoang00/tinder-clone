import { Row, Col, Button } from "antd";
import { FireFilled, LikeFilled, UserOutlined } from "@ant-design/icons";

const MenuList = () => {
  return (
    <Row>
      <Col span={8} style={{ textAlign: "right" }}>
        <Button
          icon={<LikeFilled style={{ fontSize: "45px" }} />}
          size="large"
          type="link"
        ></Button>
      </Col>
      <Col span={8} style={{ textAlign: "center" }}>
        <Button
          icon={<FireFilled style={{ fontSize: "45px" }} />}
          size="large"
          type="link"
          danger
        ></Button>
      </Col>
      <Col span={8} style={{ textAlign: "left" }}>
        <Button
          icon={<UserOutlined style={{ fontSize: "45px" }} />}
          size="large"
          type="link"
        ></Button>
      </Col>
    </Row>
  );
};

export default MenuList;
