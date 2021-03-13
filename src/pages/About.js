import React from "react"
import { Self } from "../images/"

const About = () => {
    return (
        <div className="container">

            <h1 className="text-center">About Me</h1>
            <p className="text-center">I'm a full stack Web Developer based in California.</p>
            <img src={Self} alt="alex" />

            

        </div>
        
    )
}

export default About