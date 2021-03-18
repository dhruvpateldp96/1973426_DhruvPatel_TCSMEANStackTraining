import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogList, clickHandler, setModalState }) => {
  return (
    <React.Fragment>
      {blogList.map((blog) => (
        <BlogCard
          key={blog.key}
          title={blog.title}
          description={blog.articles}
          imgObjs={blog.dragger ? blog.dragger : []}
          clickHandler={clickHandler}
          setModalState={setModalState}
        />
      ))}
    </React.Fragment>
  );
};

export default BlogList;
