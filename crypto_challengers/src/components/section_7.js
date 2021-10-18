import "./section_7.css";

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact pb-3">
                <div className="heading pt-5 pb-5">CONTACT US</div>
                <div className="container contact-us-form mt-5">
                    <div className="row">
                        <div className="col-12 ps-4">
                            <form
                                id="submit-form"
                                className="row g-3 text-center mt-2"
                            >
                                <div className="row justify-content-center">
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        placeholder="NAME"
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        placeholder="EMAIL ID"
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center mt-4 mb-2">
                                    <div className="input-group mb-4">
                                        <textarea
                                            name="message"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomUsername"
                                            rows="3"
                                            placeholder="MESSAGE"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-2 button">
                                    <button
                                        className="btn btn-primary"
                                        value="submit"
                                        type="submit"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="mail-phone text-center">
                                <h5>Email</h5>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:cryptochallengers.info@gmail.com">
                                    cryptochallengers.info@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="icons text-center mt-3">
                        <a href="https://medium.com/@CryptoChallengersD">
                            <button className="btn btn-primary">
                                <i className="fa fa-medium"></i>
                            </button>
                        </a>
                        <a href="http://t.me/CryptoChallengersD">
                            <button className="btn btn-primary">
                                <i className="fa fa-telegram"></i>
                            </button>
                        </a>
                        <a href="https://twitter.com/C_Challengers">
                            <button className="btn btn-primary">
                                <i className="fa fa-twitter"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="copyright text-center p-2">
                    <div className="copy">
                        © 2021
                        <strong>
                            <a href="#"> Crypto Challengers. </a>
                        </strong>
                        All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
