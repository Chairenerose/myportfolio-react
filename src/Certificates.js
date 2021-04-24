import intro from "./images/introcoding.png";
import frontend from "./images/frontend.png";
import reactphoto from "./images/react.png";
import intropdf from "./images/introcodingpdf.pdf";
import frontendpdf from "./images/frontendpdf.pdf";
import reactpdf from "./images/reactpdf.pdf";
import "./Certificates.css"

import React from "react";

export default function Certificates() {
    return (
        <div>
            <h1 id="certificate-title">Certificates</h1>
            <div className="Certificates-display">
                <ul>
                    <li>
                        <a href={intropdf} target="_blank" rel="noreferrer" download>
                            <img src={intro} width="300" alt="codingcertificate" />
                        </a>
                    </li>
                    <li>(click to download)</li>

                </ul>
                <ul>
                    <li>
                        <a href={frontendpdf} target="_blank" rel="noreferrer" download>
                            <img src={frontend} width="300" alt="codingcertificate" />
                        </a>
                    </li>
                    <li>(click to download)</li>

                </ul>
                <ul>
                    <li>
                        <a href={reactpdf} target="_blank" rel="noreferrer" download>
                            <img src={reactphoto} width="300" alt="codingcertificate" />
                        </a>
                    </li>
                    <li>(click to download)</li>
                </ul>
            </div>
        </div>


    );
}


