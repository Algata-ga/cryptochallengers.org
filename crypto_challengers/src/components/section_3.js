import "./section_3.css";

const Highlights = () => {
    return (
        <section id="highlights" class="highlights pb-3">
            <div class="heading pt-5 pb-5">OUR HIGHLIGHTS</div>

            <div class="container pb-5">
                <div class="row">
                    <div
                        class="
              card
              card1
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInTopLeft animate__delay-s
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-users"></i>
                            <p>45,000+</p>
                            <h4>COMMUNITY MEMBERS</h4>
                        </div>
                    </div>
                    <div
                        class="
              card
              card2
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInTopLeft animate__delay-1s
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-check-circle"></i>
                            <p>200+</p>
                            <h4>AMA'S HOSTED</h4>
                        </div>
                    </div>
                    <div
                        class="
              card
              card1
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInTopLeft animate__delay-1s
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-twitter"></i>
                            <p>17,000+</p>
                            <h4>TWITTER FOLLOWERS</h4>
                        </div>
                    </div>
                    <div
                        class="
              card
              card2
              card4
              d-flex
              justify-content-around
              wow
              animate__animated animate__fadeInTopLeft animate__delay-1s
            "
                    >
                        <div class="card-body">
                            <i class="fa fa-gift"></i>
                            <p>$25,000+</p>
                            <h4>REWARDS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
