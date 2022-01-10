import { useMemo } from "react";
import { Table } from "antd";

import styles from "./Liked.module.less";

const Liked = () => {
  const likedList = JSON.parse(localStorage.getItem("liked"));

  const dataSource = useMemo(() => {
    if (!likedList) {
      return [];
    }
    return likedList.map((profile) => ({
      id: profile.id,
      name: `${profile.first_name} ${profile.last_name}`,
      age: profile.age,
    }));
  }, [likedList]);

  const columns = [
    {
      title: "Full name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
  ];

  return (
    <div className={styles.liked}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(row) => row.user_id}
      />
    </div>
  );
};

export default Liked;
