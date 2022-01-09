import { Row, Col, Card, Table } from "antd";

import styles from "./Passed.module.less";

const Passed = () => {
  const likedList = localStorage.getItem("liked");
  console.log(JSON.parse(likedList));

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  return (
    <div className={styles.passed}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Passed;
