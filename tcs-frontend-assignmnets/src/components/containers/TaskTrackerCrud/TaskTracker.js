import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider, DatePicker } from "antd";
import { StyleSheet, css } from "aphrodite-jss";
import { Table, Popconfirm, Tag, Space } from "antd";
import { v4 as uuidv4 } from "uuid";
import axios from "../../../utils/axios";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

// const useStateWithSessionStorage = (sessionStorageKey, initVal) => {
//   const [value, setValue] = React.useState(
//     JSON.parse(sessionStorage.getItem(sessionStorageKey)) || initVal
//   );

//   useEffect(() => {
//     sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };

const TaskTracker = () => {
  // Advanced state management using LocalStorage
  //   const [tableArr, setTableArr] = useStateWithSessionStorage("tableArr", []);
  //   const [total, setTotal] = useStateWithSessionStorage("total", 0);

  const [tableArr, setTableArr] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/tasks/")
      .then((res) => {
        let values = res.data.data;
        setTableArr([...tableArr, ...values]);
      })
      .catch((err) => console.log(err));
  }, []);

  const onFinish = (values) => {
    // console.log("Success:", values);

    let body = {
      emp_id: values.emp_id,
      task_id: values.task_id,
      description: values.description,
      key: uuidv4(),
      deadline: values.deadline,
    };
    axios
      .post("/tasks/addtask", body)
      .then((res) => setTableArr([...tableArr, body]))
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("table array", tableArr);

  const columns = [
    {
      title: "Employee ID",
      dataIndex: "emp_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Task ID",
      dataIndex: "task_id",
    },
    {
      title: "Task Description",
      dataIndex: "description",
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
    },

    {
      title: "Edit / Delete Entry",
      key: "key",
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete? "
          onConfirm={() => {
            // record.addedToBudget && setTotal(total - record.amt);
            axios
              .delete(`/tasks/deletetask/${record._id}`)
              .then((res) => {
                setTableArr(tableArr.filter((row) => row._id != record._id));
              })
              .catch((err) => console.log(err));
          }}
        >
          <Button type="danger">
            Delete entry of the task {record.task_id} ?{" "}
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.formAndStatecontainer)}>
        <div className={css(styles.formContainer)}>
          <h4>ADD the details of the tasks here</h4>

          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Employee ID"
              name="emp_id"
              rules={[
                {
                  required: true,
                  message: "Please input your Vendor!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Task Id"
              name="task_id"
              rules={[
                {
                  required: true,
                  message: "Please input your Vendor's Address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Task Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your Deal Amount!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Deadline"
              name="deadline"
              rules={[
                {
                  required: true,
                  message: "Please input your Deadline!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            padding: "3rem",
            height: "300px",
            overflow: "auto",
          }}
        >
          <h4>The state of this project is displayed here</h4>
          {tableArr.map((obj) => (
            <p key={obj.key}>
              Employee Id: {obj.emp_id}, Task Id: {obj.task_id}, Task
              Description: {obj.description}, Deadline:{obj.deadline},
            </p>
          ))}
        </div>
      </div>
      <Divider />
      <div className={css(styles.tableContainer)}>
        <Table
          columns={columns}
          dataSource={tableArr}
          rowClassName={() => "editable-row"}
          bordered
        />
      </div>
    </div>
  );
};

export default TaskTracker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  formAndStatecontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formContainer: {
    // alignSelf: "center",
  },
  tableContainer: {
    padding: "2rem 12rem 0rem 12rem",
  },
});
