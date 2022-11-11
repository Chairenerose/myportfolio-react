import React from "react";
import "./Designs.css";
import Femmerebelle from "./images/femmerebelle.png";
import Nanafofie from "./images/nanafofie.png";
import DoctorIbrow from "./images/DoctorIbrow.png"

export default function Designs() {
    return (
        <div>
            <h1 id="project-title" >Designs</h1>

            <div className="Design-photos">
                <ul className="Designs-one">

                    <li id="femmerebelleapp">
                        <a href="https://www.femme-rebelle.nl/" target="_blank" rel="noreferrer">

                            <img id="weatherapp" src={Femmerebelle} alt="Femmerebelleapp" />
                        </a>
                    </li>
                    <li id="nanafofieapp">
                        <a href="https://nanafofie.com/" target="_blank" rel="noreferrer">

                            <img id="nanafofieapp" src={Nanafofie} alt="Nanafofie" />
                        </a>
                    </li>
                    <li id="doctoribrowapp">
                        <a href="https://doctoribrow.com/" target="_blank" rel="noreferrer">

                            <img id="doctoribrowapp" src={DoctorIbrow} alt="doctoribrow" />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}