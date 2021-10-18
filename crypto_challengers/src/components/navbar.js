import "./navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
    let menuOptions = [
        ["#partners", "partners"],
        ["#highlights", "highlights"],
        ["#about", "about"],
        ["#reviews", "reviews"],
        ["#contact", "contact us"],
        ["#ama", "ama's"],
    ];
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light text-uppercase ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={Logo}
                            alt=""
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
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>

                            {menuOptions.map((option) => (
                                <li
                                    className="nav-item ms-auto"
                                    key={option[0]}
                                >
                                    <a className="nav-link" href={option[0]}>
                                        {option[1]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
