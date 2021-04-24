import React, { useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";

import "./Portlinks.css"

export default function Portlinks() {
    let [projectTitle, setProject] = useState();
    let [certificateTitle, setCertificate] = useState();
    let [skillsTitle, setSkills] = useState();
    let [showProjects, setProjectShow] = useState();

    function Project() {
        return (
            setProject("Projects")
        )
    }

    function Certificate() {
        return (
            setCertificate("Certficates")
        )
    }

    function Skill() {
        return (
            setSkills("Skills")
        )
    }

    function myProjects() {
        return (
            setProjectShow(<Projects />)
        )
    }

    function myCertificates() {
        return (
            setProjectShow(<Certificates />)
        )
    }

    function mySkills() {
        return (
            setProjectShow(<Skills />)
        )
    }


    return (
        <div>

            <div className="Menu-links">
                <ul className="Hover-links">
                    <li>
                        <div className="showProject">{projectTitle}</div>
                    </li>
                    <li>
                        <div className="showCertificate">{certificateTitle}</div>
                    </li>
                    <li>
                        <div className="showSkill">{skillsTitle}</div>
                    </li>
                </ul>
                <ul>

                    <li>

                        <div onMouseEnter={Project} onMouseLeave={() => setProject(false)} className="Projects" onClick={myProjects}>P</div>

                    </li>
                    <li><div onMouseEnter={Certificate} onMouseLeave={() => setCertificate(false)} className="Certificates" onClick={myCertificates}>C</div></li>
                    <li><div onMouseEnter={Skill} onMouseLeave={() => setSkills(false)} className="Skills" onClick={mySkills}>S</div></li>

                </ul>

            </div>

            <div className="link-output">
                {showProjects}
            </div>
        </div>

    )
}