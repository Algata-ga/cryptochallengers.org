import React from "react";
import "./App.css";
import Logo from "./assets/logo.png";

const Navbar = () => {
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
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src={Logo}
                            alt="LOGO"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        <div className="content">CryptoChallengers</div>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse ms-auto"
                        id="navbarTogglerDemo02"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-auto">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/#about">
                                    about
                                </a>
                            </li>
                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/#highlights">
                                    highlights
                                </a>
                            </li>

                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/#partners">
                                    partners
                                </a>
                            </li>

                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/#reviews">
                                    reviews
                                </a>
                            </li>
                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/#contact">
                                    contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

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
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@CryptoChallengers",
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

            <div className="inmedium">
                <a href="https://medium.com/@CryptoChallengersD" target="blank">
                    <button>More At Medium</button>
                </a>
            </div>

            <footer>
                <div className="copyright text-center p-2">
                    <div className="copy">
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
        <div>
            <Navbar />
            <Ama />
        </div>
    );
};

export default App;
