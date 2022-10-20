import React from "react";
import "./styles.css";

const BlogLayout = ({
  handleAddBlog,
  blogInValue,
  handleChange,
  postsBlog,
}) => {
  return (
    <div className="container">
      <h1>Test blog</h1>
      <form onSubmit={handleAddBlog}>
        <input
          type="text"
          className="titleValue"
          name="title"
          required
          placeholder="Title"
          value={blogInValue.title}
          onChange={(event) => handleChange(event)}
        />
        <textarea
          type="text"
          className="desctriptionValue"
          name="description"
          required
          placeholder="Decription"
          value={blogInValue.description}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">ADD</button>
      </form>

      {postsBlog.map(({ title, description }, index) => {
        return (
          <div className="post" key={index}>
            <h3 className="postTitle">{title}</h3>
            <p className="postDescription">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogLayout;
