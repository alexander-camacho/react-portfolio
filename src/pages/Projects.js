import React from "react"
import Project from "../components/Project"
import { Burger, Companion, Cookbook, Weather, Planner } from "../images/"


const Projects = () => {

    const apps = [
        {
            title: "Companion",
            code: "https://github.com/alexander-camacho/Companion",
            live: "https://frozen-forest-29372.herokuapp.com/",
            description: "is a pet-based social media app that allows users to create a profile, and post photos and comments.",
            image: Companion
        },
        {
            title: "Burger Devourer",
            code: "https://github.com/alexander-camacho/burger",
            live: "https://murmuring-journey-75522.herokuapp.com/",
            description: "is a Node Express app using mySQL for a database.",
            image: Burger
        },
        {
            title: "Cookbook",
            code: "https://github.com/alexander-camacho/cook-app",
            live: "https://alexander-camacho.github.io/cookbook-app/",
            description: "is an app that uses multiple APIs to find cooking recipes, and ingredients.",
            image: Cookbook
        },
        {
            title: "Weather Dashboard",
            code: "https://github.com/alexander-camacho/weather.dashboard",
            live: "https://alexander-camacho.github.io/weather.dashboard/",
            description: "is an app that uses the OpenWeatherMap API to generate weather forecasts.",
            image: Weather
        },
        {
            title: "Workday Planner",
            code: "https://github.com/alexander-camacho/workday.planner",
            live: "https://alexander-camacho.github.io/workday.planner/",
            description: "is an app that allows the user to save notes based on the time.",
            image: Planner
        },
    ]
    return (
        <div className='container-sm'>

            <h1 className="text-center">Projects</h1>
            <Project data={apps}/>
        </div>
    )
}

export default Projects