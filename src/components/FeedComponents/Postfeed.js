import React, { useState } from "react";

// import "./src/Styles/Feedpost.css";

const Postfeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Nobu",
      description: "Ama stay down today",
      image:
        "https://sleepycat.in/wp-content/uploads/2021/03/Dog-Bed-original-Grey-PDP-Img-1_.jpg",
    },
    {
      id: 2,
      author: "Takkie",
      description: "cats taking up my space on the couch",
      image:
        "https://i.pinimg.com/236x/e8/85/61/e8856166f9e04d12bd51b7b35a95b137.jpg",
    },
  ]);
  return (
    <div className="Postfeed">
      {/* We might be better off moving code below to a separate component. But are keeping it for now! */}
      {posts.map((post) => (
        <ul>
          <li key={post.id}>
            <h2>{post.author}</h2>
            <p>{post.description}</p>
            <img src={post.image} alt="opp" />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Postfeed;
