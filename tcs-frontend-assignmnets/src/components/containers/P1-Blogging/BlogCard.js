import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite-jss";

const { Meta } = Card;

const BlogCard = ({
  imgObjs,
  description,
  title,
  clickHandler,
  setModalState,
}) => {
  const handleClick = () => {
    clickHandler();
    setModalState({ imgObjs, description, title });
  };
  return (
    <Card
      className={css(styles.card)}
      onClick={handleClick}
      hoverable
      style={{ flexBasis: "auto", width: 300, marginBottom: "25px" }}
      cover={
        <img
          alt="sorry"
          style={{ height: 225 }}
          src={
            imgObjs[0]
              ? imgObjs[0].url
              : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          }
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        // style={{ overflow: "hidden" }}
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        description={
          <div
            style={{
              height: "22px",
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        }
      />
    </Card>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    "& .ant-card-body": {
      height: "95px",
    },
  },
});
