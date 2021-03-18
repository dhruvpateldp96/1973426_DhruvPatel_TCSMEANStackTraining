import { Form, Input, Button, Checkbox, Divider, Upload, Modal } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { getPresignedUrl } from "../../../services/S3";
import { imageHandlerProps } from "./util";
import React, { useState, useEffect } from "react";
const { TextArea } = Input;

const AddBlog = ({ onFormSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [imgLink, setImgLink] = useState([]);
  const [form] = Form.useForm();

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    // const urls = e.fileList.map((file) => file.url);
    return e && e.fileList;
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   // setBlogList();
  // };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add a new Blog
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Form {...layout} name="basic" form={form} onFinish={onFormSubmit}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Articles"
            name="articles"
            rules={[
              {
                required: true,
                message: "Please input Article!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          {/* Dragger */}
          <Form.Item label="Upload Images">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={(e) => normFile(e)}
              noStyle
            >
              <Upload.Dragger {...imageHandlerProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddBlog;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
