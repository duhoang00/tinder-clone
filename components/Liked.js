import { Row, Col, Card, Table } from "antd";

import styles from "./Liked.module.less";

const Liked = () => {
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
    <div className={styles.liked}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Liked;
