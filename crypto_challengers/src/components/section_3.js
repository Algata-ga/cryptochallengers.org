import "./section_3.css";

const Highlights = () => {
    return (
        <section id="highlights" className="highlights pb-3">
            <div className="heading pt-5 pb-5">OUR HIGHLIGHTS</div>

            <div className="container pb-5">
                <div className="row">
                    <div className="card card1 col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-users"></i>
                            <p>45000+</p>
                            <h4>COMMUNITY MEMBERS</h4>
                        </div>
                    </div>
                    <div className="card card2 col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-check-circle"></i>
                            <p>200+</p>
                            <h4>AMA'S HOSTED</h4>
                        </div>
                    </div>
                    <div className="card card1 col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-twitter"></i>
                            <p>17000+</p>
                            <h4>TWITTER FOLLOWERS</h4>
                        </div>
                    </div>
                    <div className="card card2 col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-gift"></i>
                            <p>$25000+</p>
                            <h4>REWARDS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
