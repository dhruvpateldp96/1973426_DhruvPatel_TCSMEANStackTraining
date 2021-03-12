import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const MyCard = () => {
  return (
    <div style={{ padding: "1rem" }}>
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
