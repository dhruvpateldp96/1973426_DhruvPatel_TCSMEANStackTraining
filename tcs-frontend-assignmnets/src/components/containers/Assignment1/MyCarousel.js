import React from "react";
import { Carousel } from "antd";
import MyCard from "./MyCard";

function onChange(a, b, c) {
  console.log(a, b, c);
}
const MyCarousel = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay>
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </Carousel>
  );
};

export default MyCarousel;
