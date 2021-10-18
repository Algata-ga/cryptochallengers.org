import "./section_1.css";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";

const TypedT = () => {
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["#WeAreChallengers"],
            smartBackspace: true, // Default value
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span className="typed" ref={typeTarget} />;
};
const Section1 = () => {
    return (
        <section id="home" className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 main-content text-uppercase">
                        our mission is to empower the crypto industry and help
                        projects to grow up.
                        <br />
                        <TypedT />
                    </div>
                    <div className="col-sm-6 main-hero"></div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
