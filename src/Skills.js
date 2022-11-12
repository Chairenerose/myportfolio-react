import React from "react";
import "./Skills.css"

export default function Skills() {
    return (

        <div>
            <h1 id="skills-title">Skills</h1>

            <div className="skills-list">
                <div className="web-developer">
                    <h3>Web Developer Skills</h3>
                    <ul>
                        <li>HTML and CSS</li>
                        <li>Responsive design</li>
                        <li>JavaScript/jQuery</li>
                        <li>JavaScript Library: React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="creative">
                    <h3>Creative Skills</h3>
                    <ul>
                        <li>Branding</li>
                        <li>Content development</li>
                        <li>Wireframing</li>
                        <li>Visual Communication</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}