import { useMemo } from "react";
import { Table } from "antd";

import styles from "./Passed.module.less";

const Passed = () => {
  const passedList = JSON.parse(localStorage.getItem("passed"));

  const dataSource = useMemo(() => {
    if (!passedList) {
      return [];
    }
    return passedList.map((profile) => ({
      id: profile.id,
      name: `${profile.first_name} ${profile.last_name}`,
      age: profile.age,
    }));
  }, [passedList]);

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
    <div className={styles.passed}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(row) => row.user_id}
      />
    </div>
  );
};

export default Passed;
