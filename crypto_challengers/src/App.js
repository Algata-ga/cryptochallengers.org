import "./App.css";

import Wave from "./components/wave";
import Navbar from "./components/navbar";
//import Section1 from "./section_1";
//import AMA from "./ama";
import Home from "./components/section_1";
import Partners from "./components/section_2";
import Highlights from "./components/section_3";
import About from "./components/section_4";
import Services from "./components/section_5";
import Reviews from "./components/section_6";
import Contact from "./components/section_7";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Partners />
            <Wave />
            <br />
            <br />
            <Highlights />
            <About />
            <Wave />
            <br />
            <br />
            <Services />
            <Reviews />
            <Contact />
        </div>
    );
}

export default App;
