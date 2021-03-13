import { Card } from "antd";
import { StyleSheet, css } from "aphrodite-jss";
import React from "react";
const { Meta } = Card;

const MyCard = () => {
  return (
    <div className={css(styles.cardMeta)}>
      <Card
        hoverable={true}
        style={{ width: 250, border: "1px solid #e1e1e1" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            width="249"
            height="auto"
          />
        }
      >
        <Meta
          style={{ padding: "1rem" }}
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
    </div>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  cardMeta: {
    boxShadow: "5px 5px 5px #e1e1e1",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
  },
});
