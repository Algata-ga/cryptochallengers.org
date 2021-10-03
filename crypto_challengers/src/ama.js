import { useState, useEffect } from "react";
import "./ama.css";

//https://medium.com/feed/@CryptoChallengersD

function Card(props) {
  return (
    <a href={props.post.link}>
      <img src={props.post.thumbnail} height="100px" width="100px" />
      <h4>{props.post.title}</h4>
    </a>
  );
}

function AMA() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };

    getData();

    async function getData() {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@CryptoChallengersD",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setPosts(data.items);
    }
  }, []);

  return (
    <div>
      <h1>AMA</h1>
      {posts && posts.map((post, index) => <Card post={post} key={index} />)}
    </div>
  );
}

export default AMA;
