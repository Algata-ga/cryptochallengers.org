import { useState, useEffect } from "react";
import "./ama.css";
import logo from "./assets/logo-white.png";

const Header = () => {
    return (
        <header>
            <nav
                className="
          navbar navbar-expand-lg navbar-light
          fixed-top
          bg-light
          text-uppercase
        "
            >
                <a classNam="navbar-brand" href="index.html">
                    <img
                        src={logo}
                        alt=""
                        width="50"
                        className="d-inline-block align-text-top"
                    />
                </a>
            </nav>
        </header>
    );
};

const RecentCard = (props) => {
    return (
        <section>
            <a href={props.post.link}>
                <div className="container">
                    <div className="latest mt-5">
                        <div className="row">
                            <div className="image col-6">
                                <img
                                    className="img-fluid"
                                    src={props.post.thumbnail}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="content col-6">
                                <h2>{props.post.title}</h2>
                                <h3>{props.post.pubDate}</h3>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

const Card = (props) => {
    return (
        <a href={props.post.link}>
            <div className="card older">
                <div className="old-img">
                    <img
                        className="img-fluid"
                        src={props.post.thumbnail}
                        alt=""
                    />
                </div>

                <div className="old-content">
                    <h2>{props.post.title}</h2>
                    <h3>{props.post.pubDate}</h3>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </a>
    );
};

const Cards = (props) => {
    return (
        <section>
            <div class="cards">
                {props.post.map((post, index) => (
                    <Card post={post} key={index} />
                ))}
            </div>
        </section>
    );
};

const AMA = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Getting AMAs from medium" }),
        };

        async function getData() {
            const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@CryptoChallengersD",
                requestOptions
            );
            const data = await response.json();
            setPosts(data.items);
            console.log(posts);
        }

        getData();
    }, []);

    if (posts == null) return null;
    return (
        <div>
            <Header />
            <RecentCard post={posts[2]} />
        </div>
    );
};

export default AMA;
