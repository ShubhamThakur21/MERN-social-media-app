import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/post", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Timeline</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: "20px" }}>
          <h3>{post.desc}</h3>
          <p>Likes: {post.likes.length}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
