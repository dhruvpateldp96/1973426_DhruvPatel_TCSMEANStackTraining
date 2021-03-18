import AddBlog from "./AddBlog";
import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { Divider, Modal } from "antd";
import BlogList from "./BlogList";
import { v4 as uuidv4 } from "uuid";
import MyCarousel from "./MyCarousel";

const useStateWithSessionStorage = (sessionStorageKey, initVal) => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || initVal
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

const Blogging = () => {
  const [blogList, setBlogList] = useStateWithSessionStorage("blogList", []);

  const [visible, toggleVisible] = useState(false);
  const [modalState, setModalState] = useState({
    title: "",
    description: "",
    imgObjs: [],
  });

  const onFormSubmit = (values) => {
    setBlogList([...blogList, { ...values, key: uuidv4() }]);
  };

  const clickHandler = (e) => {
    toggleVisible(!visible);
    // console.log(modalState);
  };

  console.log(modalState);
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imgContainer)}>
        <img
          className={css(styles.landingImage)}
          src="https://res.cloudinary.com/dhruvdp96/image/upload/v1616012311/re2ypfsaedi1fyfggsbb.jpg"
        />
        <div className={css(styles.textCentered)}>Dhruv's Blog</div>
      </div>
      <Divider />
      <AddBlog onFormSubmit={onFormSubmit} />
      <div className={css(styles.blogList)}>
        <BlogList
          blogList={blogList}
          clickHandler={clickHandler}
          setModalState={setModalState}
        />
      </div>
      <Modal
        title={<h1 style={{ padding: "0px" }}>{modalState.title}</h1>}
        visible={visible}
        footer={null}
        onCancel={() => toggleVisible(false)}
        width={1000}
      >
        <div className={css(styles.modalContainer)}>
          {modalState.imgObjs.length !== 0 ? (
            <MyCarousel
              data={modalState.imgObjs.map((img) => (
                <img src={img.url} img={img.lastModified} />
              ))}
            />
          ) : (
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
          )}
        </div>
        <Divider />
        <h1>Description</h1>
        {modalState.description}
      </Modal>
    </div>
  );
};

export default Blogging;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0rem 2rem 0rem 2rem",
  },
  imgContainer: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  landingImage: {
    width: "100%",
    height: "30vh",
    objectFit: "cover",
    overflow: "hidden",
    boxShadow: "0px 0px 12px 8px #00000024",
  },
  textCentered: {
    position: "absolute",
    top: "50%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    fontSize: "5rem",
    color: "#f97b1c",
    textShadow: "11px 4px 4px #000000c2",
  },
  formContainer: {
    // alignSelf: "center",
  },
  tableContainer: {
    padding: "2rem 12rem 0rem 12rem",
  },
  blogList: {
    display: "flex",
    flexDirection: "row",
    // "& :first-child": { marginLeft: "0 !important" },
    // "& :last-child": { marginRight: "0 !important" },
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "15px 0px",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
