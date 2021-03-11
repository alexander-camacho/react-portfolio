import React from "react"
import images from "../../images/companion-login.JPG"

const Project = () => {
    console.log(images)
    return (
        <div>

        <p className="text-center"><b>Companion</b> is a pet-based social media app that allows users to create a profile, and post photos and comments. |
        <a href="https://github.com/alexander-camacho/Companion">Code</a> |
        <a href="https://frozen-forest-29372.herokuapp.com/ ">Live App
        <img className = "portfolio-img" src={images} alt="" /></a>

    </p>
        </div>
    )
}

export default Project