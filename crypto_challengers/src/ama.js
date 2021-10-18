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
                <a className="navbar-brand" href="index.html">
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
    let parsedtitle = props.post.title.split(/\n/);
    let title = parsedtitle[0].split(":");
    title = title[1];

    let date = parsedtitle[2].split(":");
    date = date[1];
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
<<<<<<< HEAD
                                <h2>{title}</h2>
                                <h3>{date}</h3>
=======
                                <h2>{props.post.title}</h2>
                                <h3>{props.post.pubDate}</h3>
>>>>>>> 1ad2ae13ef5e5c2c35f0c567fc176b648cef98ee
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

const Card = (props) => {
    if (props.post == null) return null;
    let parsedtitle = props.post.title.split(/\n/);
    let title = parsedtitle[0].split(":");
    title = title[1];

    let date = parsedtitle[2].split(":");
    date = date[1];
    return (
        <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card older">
                <a href={props.post.link}>
                    <div className="old-img">
                        <img
                            className="img-fluid"
                            src={props.post.thumbnail}
                            alt=""
                        />
                    </div>
                    <div className="old-content">
                        <h2>{title}</h2>
                        <h3>{date}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
};

const RenderRow = (props) => {
    var rows = [];
    for (var i = 0; i < props.posts.length; i = i + 4) {
        var row = [];
        console.log(props.posts);
        row.push(
            <div className="row" key={props.posts.length + i}>
                <Card post={props.posts[i]} key={i} />
                <Card post={props.posts[i + 1]} key={i + 1} />
                <Card post={props.posts[i + 2]} key={i + 2} />
                <Card post={props.posts[i + 3]} key={i + 3} />
            </div>
        );
        rows.push(row);
    }
    return rows;
};
const Cards = (props) => {
    console.log(props.posts);
    return (
        <section>
            <div className="cards">
                <div className="container">
                    <RenderRow posts={props.posts} />
                </div>
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
        }

        getData();
    }, []);

    if (posts == null) return null;
    return (
        <div>
            <Header />
            <RecentCard post={posts[0]} />
            <Cards posts={posts} />
        </div>
    );
};

export default AMA;
