import React, { useEffect, useState } from "react";
import { Table, Popconfirm, Tag, Space, Button } from "antd";
import axios from "../../../utils/axios";
import { css, StyleSheet } from "aphrodite-jss";
import { useHistory } from "react-router-dom";

const AllCourses = () => {
  const [tableArr, setTableArr] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/courses/")
      .then((res) => {
        let values = res.data.data;
        setTableArr([...tableArr, ...values]);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: "Course ID",
      dataIndex: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Given ID",
      dataIndex: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },

    {
      title: "Edit / Delete Entry",
      key: "key",
      render: (_, record) => (
        <div className={css(styles.buttonContainer)}>
          <Popconfirm
            title="Sure to delete? "
            onConfirm={() => {
              // record.addedToBudget && setTotal(total - record.amt);
              axios
                .delete(`/courses/deletecourse/${record._id}`)
                .then((res) => {
                  setTableArr(tableArr.filter((row) => row._id != record._id));
                })
                .catch((err) => console.log(err));
            }}
          >
            <Button type="danger">
              Delete entry of the course {record.title} ?{" "}
            </Button>
          </Popconfirm>
          <Popconfirm
            title="Sure to Edit? "
            onConfirm={() => {
              history.push(`/editcourse/${record._id}`);
            }}
          >
            <Button type="primary">
              Edit entry of the course {record.title} ?{" "}
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={tableArr}
      rowClassName={() => "editable-row"}
      bordered
      rowKey="_id"
    />
  );
};

export default AllCourses;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "max-width",
  },
});
