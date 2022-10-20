import React from "react";
import { useState, useCallback } from "react";
import BlogLayout from "../components/BlogLayout";

const BlogContainer = () => {
  const [blogInValue, setChange] = useState({
    title: "",
    description: "",
  });

  const [postsBlog, setPostsBlog] = useState([]);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;
    setChange((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  }, []);

  const handleAddBlog = (event) => {
    event.preventDefault();
    const post = {
      title: blogInValue.title,
      description: blogInValue.description,
    };

    setPostsBlog((postsBlog) => {
      return [...postsBlog, post];
    });
    setChange({
      title: "",
      description: "",
    });
  };

  return (
    <BlogLayout
      handleAddBlog={handleAddBlog}
      blogInValue={blogInValue}
      handleChange={handleChange}
      postsBlog={postsBlog}
    />
  );
};
export default BlogContainer;
