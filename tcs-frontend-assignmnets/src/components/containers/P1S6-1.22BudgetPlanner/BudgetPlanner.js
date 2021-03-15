import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { StyleSheet, css } from "aphrodite-jss";
import { Table, Popconfirm, Tag, Space } from "antd";
import { v4 as uuidv4 } from "uuid";

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

const useStateWithSessionStorage = (sessionStorageKey, initVal) => {
  const [value, setValue] = React.useState(
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || initVal
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

const BudgetPlanner = () => {
  // Advanced state management using LocalStorage
  const [tableArr, setTableArr] = useStateWithSessionStorage("tableArr", []);
  const [total, setTotal] = useStateWithSessionStorage("total", 0);

  // const [tableArr, setTableArr] = useState([]);
  // const [total, setTotal] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
    setTableArr([
      ...tableArr,
      {
        vendor: values.Vendor,
        amt: values.Deal_Amount,
        address: values.Address,
        key: uuidv4(),
        addedToBudget: false,
      },
    ]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("table array", tableArr);

  const columns = [
    {
      title: "Vendor",
      dataIndex: "vendor",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Deal Amount",
      dataIndex: "amt",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Pass or Decline",
      dataIndex: "addedToBudget",
      render: (_, record) => (
        <Checkbox
          onChange={(e) => {
            const interMediatestate = tableArr;
            const ObjToToggle = interMediatestate.find(
              (obj) => obj.key == record.key
            );
            ObjToToggle.addedToBudget = !ObjToToggle.addedToBudget;
            setTableArr(interMediatestate);
            e.target.checked
              ? setTotal(total + parseFloat(record.amt))
              : setTotal(total - parseFloat(record.amt));
          }}
        >
          Add {record.amt} to total budget
        </Checkbox>
      ),
    },
    {
      title: "Delete Entry",
      key: "key",
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete? This will delete the amount from the total budget"
          onConfirm={() => {
            record.addedToBudget && setTotal(total - record.amt);
            setTableArr(tableArr.filter((row) => row.key != record.key));
          }}
        >
          <Button type="danger">
            Delete entry of venor {record.vendor} ?{" "}
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.formAndStatecontainer)}>
        <div className={css(styles.formContainer)}>
          <h4>ADD the details of the deals here</h4>

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
              label="Vendor"
              name="Vendor"
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
              label="Address"
              name="Address"
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
              label="Deal Amount"
              name="Deal_Amount"
              rules={[
                {
                  required: true,
                  message: "Please input your Deal Amount!",
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
              vendor: {obj.vendor}, amt: {obj.amt}, address: {obj.address},
              addedToBudget:{obj.addedToBudget},
            </p>
          ))}
        </div>
      </div>
      <Divider />
      <h1>Records of all the deals</h1> <h4>Total Budget: {total}</h4>
      <div className={css(styles.tableContainer)}>
        <Table columns={columns} dataSource={tableArr} />
      </div>
    </div>
  );
};

export default BudgetPlanner;

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
