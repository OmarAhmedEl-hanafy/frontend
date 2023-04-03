import React, { useState , useEffect} from "react";
import axios from "axios";
import "./CommentForm.css";

function CommentForm({ postId, onSubmit }) {
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
        const url =   `http://127.0.0.1:8000/api/users/${userid}/posts/${postId}/comments/create/`;
        const data = { content ,post: postId, user :userid};
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        };
        try {
            const response = await axios.post(url, data, { headers });
            console.log(response.data);
            console.log(postId);
            onSubmit(response.data); // notify parent component of new post
            setContent(""); // clear the content input
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="Addcom">Add a comment:</label>
                <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default CommentForm;