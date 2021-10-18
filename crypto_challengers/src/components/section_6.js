import "./section_6.css";
//import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
//import "swiper/css";

const RenderStars = (props) => {
    var res = [];
    var i;
    for (i = 0; i < Math.floor(props.stars); i = i + 1) {
        res.push(<i className="fa fa-star" key={i}></i>);
    }
    if (props.stars - Math.floor(props.stars) === 0.5) {
        res.push(
            <i className="fa fa-solid fa-star-half-stroke fa-star" key="6" />
        );
    }
    return res;
};

const ReviewCard = (props) => {
    return (
        <SwiperSlide>
            <div className="content">
                <i className="iconify" data-icon="bx:bxs-comment-edit"></i>
                <p className="card-cont">{props.review[0]}</p>
                <p className="founder">{props.review[2]}</p>
                <p>
                    <RenderStars stars={props.review[1]} />
                </p>
            </div>
        </SwiperSlide>
    );
};
const Reviews = () => {
    let reviews = [
        [
            "The collaboration and responses from CRYPTOCHALLENGERS is firm and swift, I can see there are a lot of potential of staying with them for long term. Hope its community will expand tremendously and more to come.",
            5,
            "Team MEXC GLOBAL",
        ],
        [
            "Crypto challengers is a Great Community To Intruduce Any Platform On Crypto World . And, Yeah Very Active and Great Community. Wishes To Be a Great Reputation for them and Wish to Maintain Their Reputation, Activeness, Growth As well As",
            5,
            "Team BIGONE EXCHANGE",
        ],
        [
            "Doing the AMA with Crypto Challengers was an amazing experience. The genuine passion of the community, the contents we were able to present and above all, the very professional way of organizing the AMA by the hosts, gives me all the reasons to do more future AMAs them. Crypto Challengers is worth recommending to others",
            5,
            "Team ShoeFy",
        ],
        [
            "So the AMA with Crypto Challengers group was really awesome! First of all would like to point out that their community is super active and knowlegable. We were asked great set of questions both from team and community, AMA was a breeze with no interuptions and really had an amazing response from the community! and as promised they have been sharing all our posts and major updates throughout their channels. I would highly reccomend them to any project",
            5,
            "Team PANDORA PROTOCOL",
        ],
        [
            "The community is very active and the questions coming from the Crypto Challengers's community are really impressive. This surely is the AMA community we've always wanted to do AMAs with",
            5,
            "Team BSCLaunch",
        ],
    ];
    return (
        <section id="reviews" className="review pb-5">
            <div className="heading pt-5">REVIEWS</div>
            <Swiper>
                <div className="mySwiper pb-5">
                    <div className="swiper-wrapper">
                        {reviews.map((review) => (
                            <ReviewCard review={review} key={review[2]} />
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </section>
    );
};

export default Reviews;
