import React from "react";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import { StyleSheet, css } from "aphrodite-jss";
import MyCard from "./MyCard";

const Assignment1 = () => {
  return (
    <div>
      <div className={css(styles.heading)}>
        <h1>Assignment1 March 12 (Design Sell)</h1>
      </div>
      <div className={css(styles.cardContainer)}>
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
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
  );
};

export default Assignment1;

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    flexWrap: "wrap",
  },
  antCarousel: {
    "& .slick-slide": {
      textAlign: "center",
      height: "160px",
      lineHeight: "160px",
      background: "#364d79",
    },
  },
});
