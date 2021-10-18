import "./section_4.css";
import Logo from "../assets/about-img.png";

const About = () => {
    return (
        <section id="about" className="about mb-5">
            <div className="heading pt-5 pb-5">ABOUT US</div>

            <div className="container">
                <div className="row">
                    <div className="about-img col-12 col-md-5">
                        <img className="img-fluid" src={Logo} alt="" />
                    </div>
                    <div className="about-content col-12 col-md-7">
                        <p>
                            CryptoChallengers community is a blockchain social
                            media community for investors, traders, Influencer
                            and crypto Enthuastatic people who are interested to
                            learn more about blockchain and cryptocurrency.
                            CryptoChallengers community have over 35k+ users in
                            telegram, We connect Investors with Legit and
                            promising Blockchain projects. Always welcome to the
                            world of Challengers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
