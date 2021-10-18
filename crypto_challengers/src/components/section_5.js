import "./section_5.css";

const Services = () => {
    return (
        <section id="services" class="services pb-5">
            <div class="heading mt-5 pb-5">SERVICES</div>

            <div class="container">
                <div class="row">
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInLeft
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-check-circle"></i>
                            <p>HOSTING AMA SESSION</p>
                        </div>
                    </div>
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInDown
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-gift"></i>
                            <p>HOSTING GIVEAWAYS</p>
                        </div>
                    </div>
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInRight
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-twitter"></i>
                            <p>TWITTER PROMOTION</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInLeft
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-thumbtack"></i>
                            <p>TELEGRAM PIN POST</p>
                        </div>
                    </div>
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInUp
            "
                    >
                        <div class="card-body">
                            <i
                                class="fa iconify"
                                data-icon="fontisto:hot-air-balloon"
                            ></i>
                            <p>AIRDROP & GIVEAWAY PROMOTION</p>
                        </div>
                    </div>
                    <div
                        class="
              card
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInRight
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-rocket"></i>
                            <p>PROJECT MARKETING DEVELOPMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
