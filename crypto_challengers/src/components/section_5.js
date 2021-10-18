import "./section_1.css";

const Services = () => {
    return (
        <section id="services" className="services pb-5">
            <div className="heading mt-5 pb-5">SERVICES</div>

            <div className="container">
                <div className="row">
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-check-circle"></i>
                            <p>HOSTING AMA SESSION</p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-gift"></i>
                            <p>HOSTING GIVEAWAYS</p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-twitter"></i>
                            <p>TWITTER PROMOTION</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-thumbtack tg-rotate"></i>
                            <p>TELEGRAM PIN POST</p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i
                                className="fa iconify"
                                data-icon="fontisto:hot-air-balloon"
                            ></i>
                            <p>AIRDROP & GIVEAWAY PROMOTION</p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
                        <div className="card-body">
                            <i className="fa fa-rocket"></i>
                            <p>PROJECT MARKETING DEVELOPMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
