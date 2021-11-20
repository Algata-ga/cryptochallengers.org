import React from "react";
import "./App.css";

const Card = (props) => {
    if (props.post == null) return null;
    let parsedtitle = props.post.title.split(/\n/);
    let title = parsedtitle[0].split(":");
    title = title[1];
    console.log(parsedtitle[2]);
    let date;
    if (parsedtitle[2] !== undefined) {
        date = parsedtitle[2].split(":");
        date = date[1];
        console.log("TF");
    }

    return (
        <div className="col-12 col-md-6 col-lg-6 col-xl-3 ">
            <div className="card older">
                <a href={props.post.link}>
                    <div className="old-img">
                        <img
                            className="img-fluid"
                            src={props.post.thumbnail}
                            alt={props.title}
                            loading="eager"
                        />
                    </div>
                    <div className="old-content">
                        <h3>{title}</h3>
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
        <section className="wrapper">
            <div className="cards">
                <div className="container">
                    <RenderRow posts={props.posts} />
                </div>
            </div>
        </section>
    );
};
const Loader = () => {
    return (
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
const Ama = () => {
    const [posts, setPosts] = React.useState(null);
    React.useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Getting AMAs from medium",
            }),
        };

        const data = fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@CryptoChallengersD",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => setPosts(data.items));
        setPosts(data.items);
    }, []);

    if (posts == null) return <Loader />;
    return (
        <div>
            <Cards posts={posts} />

            <div class="inmedium">
                <a href="https://medium.com/@CryptoChallengersD" target="blank">
                    <button>More At Medium</button>
                </a>
            </div>

            <footer>
                <div class="copyright text-center p-2">
                    <div class="copy">
                        © 2021
                        <strong>
                            <a href="/"> Crypto Challengers. </a>
                        </strong>
                        All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

const App = () => {
    return (
        <div style={{ height: "max-content" }}>
            <header>
                <nav
                    class="
                    navbar navbar-expand-lg navbar-dark
                    fixed-top
                    bg-light
                    text-uppercase
                "
                >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img
                                src="./assets/logo-white.png"
                                alt=""
                                width="30"
                                height="24"
                                class="d-inline-block align-text-top"
                            />
                            <div class="content">CryptoChallengers</div>
                        </a>
                        <a href="/">
                            <button class="home">
                                <span
                                    class="fa fa-home"
                                    style={{ fontSize: "1.4em" }}
                                ></span>
                            </button>
                        </a>
                    </div>
                </nav>
            </header>
            <Ama />
        </div>
    );
};

export default App;
