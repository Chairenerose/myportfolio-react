import React from "react";
import "./Projects.css";
import FOM from "./images/friendsofmadina.jpg";
import Shreddy from "./images/shreddyapp.jpg";
import Weatherapp from "./images/weatherapp.jpg";
import Ilariaport from "./images/ilariaportfolio.jpg";

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
                    <li id="friendsapp">
                        <a href="https://pensive-bhaskara-72646f.netlify.app/" target="_blank" rel="noreferrer">

                            <img id="friendsofmadina" src={FOM} alt="ngoapp" />

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
            </div>
        </div>);
}