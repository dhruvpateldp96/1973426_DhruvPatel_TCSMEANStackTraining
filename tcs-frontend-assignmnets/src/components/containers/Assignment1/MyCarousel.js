import React from "react";
import { Carousel } from "antd";
import MyCard from "./MyCard";
import { StyleSheet, css } from "aphrodite-jss";
import "antd/dist/antd.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}
const MyCarousel = ({ data }) => {
  return (
    <div className={css(styles.carouselContainer)}>
      <Carousel
        draggable={true}
        centerMode={true}
        touchThreshold={50}
        focusOnSelect={true}
        swipeToSlide={true}
        slidesToShow={5}
      >
        {data ? data.map((elem) => elem) : <h1>Loading</h1>}
      </Carousel>
    </div>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    boxShadow: "5px 5px 5px #e1e1e1",
    "& .ant-carousel .slick-slide": {
      textAlign: "center",
      height: "auto",
      lineHeight: "auto",
      background: "#e1e1e1",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    },
  },
});
