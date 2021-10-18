import "./section_2.css";

import Bunny from "../assets/bunny.png";
import Pandora from "../assets/Pandora_Protocol_Logo_undefined.png";
import LaunchZone from "../assets/LaunchZone_Logo_undefined.png";
import Neo from "../assets/neo-neo-logo-full_1.png";
import GameNFT from "../assets/gamenft.png";
import TomoChain from "../assets/tomochain.png";
import BSCLaunch from "../assets/bsclaunch.png";
import Bkex from "../assets/bkex.png";
import Brokoli from "../assets/brokoli.png";
import Feg from "../assets/feg.png";
import Mexc from "../assets/mexc.png";
import MultiGame from "../assets/multigame.png";
import Orion from "../assets/orion.png";
import Defill from "../assets/defi.png";
import Bigone from "../assets/bigone.png";

const Slide = (props) => {
    return (
        <div className="slide">
            <a href={props.partner[0]}>
                <img
                    src={props.partner[1]}
                    height="100"
                    width="250"
                    alt={props.partner[2]}
                    loading="lazy"
                />
            </a>
        </div>
    );
};
const Partners = () => {
    let partners = [
        ["https://www.bunnypark.com", Bunny, "Bunny"],
        ["https://pandora.finance", Pandora, "Pandora Protocol"],
        ["https://lz.finance/#/", LaunchZone, "LaunchZone"],
        ["https://neo.org/", Neo, "Neo"],
        ["https://www.gamenft.vip/#/home", GameNFT, "GameNFT"],
        ["https://tomochain.com/", TomoChain, "TomoChain"],
        ["https://bsclaunch.org/", BSCLaunch, "BSCLaunch"],
        ["https://www.bkex.com/", Bkex, "BKex"],
        ["https://brokoli.network/", Brokoli, "Brokoli"],
        ["https://fegtoken.com/", Feg, "Feg"],
        ["https://www.mexc.com/", Mexc, "Mexc"],
        ["https://multigame.org/", MultiGame, "MultiGame"],
        ["https://orion.money/", Orion, "Orion"],
        ["https://www.defieleven.com/", Defill, "Defill"],
        ["https://big.one/en", Bigone, "BigOne"],
    ];
    return (
        <section id="partners" className="partners pb-5">
            <div className="heading pt-5 pb-5">OUR PARTNERS</div>
            <div className="caro mt-3 mb-5">
                <div className="slider">
                    <div className="slide-track">
                        {partners.map((partner) => (
                            <Slide partner={partner} key={partner[2]} />
                        ))}
                        {partners.map((partner) => (
                            <Slide partner={partner} key={partner[2]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
