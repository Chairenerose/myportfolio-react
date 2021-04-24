import React from "react";
import Portlinks from "./Portlinks";
import "./Portfolio.css";
import profile from "./images/chairene.jpeg";


export default function Portfolio() {

    return (
        <div>

            <div className="Home">

                <ul>
                    <li>
                        <div className="Biography">
                            <ul >
                                <li>
                                    <h1>Chairene Chidozie</h1>
                                </li>

                                <li><h3>Web developer and Creative</h3></li>
                                <li><p>Currently Based in the Hague</p></li>

                            </ul>

                        </div>

                    </li>

                    <li>
                        <img className="profilePhoto" src={profile} />
                    </li>

                </ul>



            </div>


            <section id="link-output">
                <Portlinks />

            </section>

            <footer>
                <h3>Chairene Chidozie</h3>
                <div className="connect">
                    <ul>
                        <li> <a href="https://www.linkedin.com/in/chairene-chidozie-1b08a3203/" target="_blanket" >LinkedIn</a></li>
                        <li><a href="https://github.com/Chairenerose?tab=overview&from=2021-03-01&to=2021-03-31" id="Git" target="_blanket">GitHub</a></li>
                        <li><a href="mailto:chairenecodes@icloud.com" id="Email" target="_blanket" >Email</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}