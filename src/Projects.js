import React from "react";
import "./Projects.css";
import FOICES from "./images/foices.png";
import Shreddy from "./images/shreddyapp.jpg";
import Weatherapp from "./images/weatherapp.jpg";
import Ilariaport from "./images/ilariaportfolio.jpg";
import Fomapp from "./images/friendsofmadina.jpg";

export default function Projects() {
    return (
        <div>
            <h1 id="project-title" >Projects</h1>
            <div className="Project-photos">

                <ul className="Projects-one">
                    <li id="weatherapp">
                        <a href="https://zen-babbage-2894e1.netlify.app/" target="_blank" rel="noreferrer">

                            <img id="weatherapp" src={Weatherapp} alt="weatherapp" />
                        </a>



                    </li>
                    <li id="foicesapp">
                        <a href="https://www.f-oice-s.com/home.html" target="_blank" rel="noreferrer">

                            <img id="foicesphoto" src={FOICES} alt="foicesarticle" />

                        </a>
                    </li>

                </ul>

                <ul className="Projects-two">

                    <li id="ilariaapp">

                        <a href="https://frosty-northcutt-f31e8f.netlify.app/" target="_blank" rel="noreferrer">


                            <img id="ilariaport" src={Ilariaport} alt="portfolio" />
                        </a>

                    </li>
                    <li id="shreddyapp">
                        <a href="https://relaxed-leakey-b73f90.netlify.app/" target="_blank" rel="noreferrer">

                            <img id="shreddy" src={Shreddy} alt="shreddy" />
                        </a>


                    </li>

                  
                </ul>

                <ul className="Projects-three">

                    <li id="fomapp">
                        <a href="https://pensive-bhaskara-72646f.netlify.app/index.html" target="_blank" rel="noreferrer">
                            <img id="friendsofmadina" src={Fomapp} alt="fomapp" />
                        </a>
                    </li>
                  
                </ul>
            </div>
        </div>);
}