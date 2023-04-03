import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Post.css";


const CreatePost = ({ onPostCreated }) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userid, setUserid] = useState("");

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("data")) || [];
        userData.forEach((user) => {
            setUserid(user.id);
        });
      });

      

      const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/api/posts/create/${userid}`;
        const data = { title, content };
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        };
        try {
          const response = await axios.post(url, data, { headers });
          console.log(response.data);
          console.log(data.id);
          onPostCreated(response.data); // notify parent component of new post
    
          setTitle(""); // clear the title input
          setContent(""); // clear the content input
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <section className="createpost">
      <div className="pro-img">
        <div className="bg-post"></div>
      </div>
      <form onSubmit={handleSubmit} className="Form">
        <div className="input">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create post</button>
      </form>
    </section>
  );
};

export default CreatePost;