import { useState, useEffect } from "react";
import "./ama.css";

//https://medium.com/feed/@CryptoChallengersD

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
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <p>{post.title}</p>
          </div>
        ))}
    </div>
  );
}

export default AMA;
