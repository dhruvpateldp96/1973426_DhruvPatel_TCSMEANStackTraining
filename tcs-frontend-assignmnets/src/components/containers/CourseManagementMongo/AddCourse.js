import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space } from "antd";
import { css, StyleSheet } from "aphrodite-jss";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "../../../utils/axios";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const AddCourse = (props) => {
  const id = props.match.params.id;
  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios
        .get(`/courses/getcourse/${id}`)
        .then((course) => {
          const data = course.data.data;
          console.log(data);
          form.setFieldsValue({
            id: data.id,
            description: data.description,
            title: data.title,
            amount: data.amount,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (id) {
      axios
        .put(`/courses/editcourse/${id}`, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      axios
        .post("/courses/addcourse", values)
        .then((res) => alert(res))
        .catch((err) => console.log(err));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={css(styles.formContainer)}>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={css(styles.form)}
      >
        <div className={css(styles.formRow)}>
          {id && (
            <Button onClick={() => history.push("/getcourses")}>
              Back to All Courses
            </Button>
          )}
          <div className={css(styles.formColumn)}>
            <Form.Item
              label="ID"
              name="id"
              rules={[{ required: true, message: "Please input the ID!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input the Title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your Short Description!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                { required: true, message: "Please input your Markup Price!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddCourse;

const styles = StyleSheet.create({
  formContainer: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  formRow: {
    width: "100%",
    display: "flex",
    // alignItems: "space-between",
    justifyContent: "space-between",
    marginBottom: "120px",
  },
  formColumn: {},
  curriculum: {},
});
