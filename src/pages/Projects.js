import React from "react"
import Project from "../components/Project"
import { Burger, Companion, Cookbook, Weather, Budget, EmpDir } from "../images/"


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
            title: "Cookbook",
            code: "https://github.com/alexander-camacho/cook-app",
            live: "https://alexander-camacho.github.io/cookbook-app/",
            description: "is an app that uses multiple APIs to find cooking recipes, and ingredients.",
            image: Cookbook
        },
        {
            title: "Budget Tracker",
            code: "https://github.com/alexander-camacho/budeget-tracker",
            live: "https://enigmatic-crag-90504.herokuapp.com/",
            description: "is a PWA that allows a user to track their budget.",
            image: Budget
        },
        {
            title: "Employee Directory",
            code: "https://github.com/alexander-camacho/reactEmployeeDir",
            live: "https://alexander-camacho.github.io/reactEmployeeDir/",
            description: "is a React app that allows the user to sort a list of employees using various sort methods.",
            image: EmpDir
        },
        {
            title: "Burger Devourer",
            code: "https://github.com/alexander-camacho/burger",
            live: "https://murmuring-journey-75522.herokuapp.com/",
            description: "is a Node Express app using mySQL for a database.",
            image: Burger
        },
        {
            title: "Weather Dashboard",
            code: "https://github.com/alexander-camacho/weather.dashboard",
            live: "https://alexander-camacho.github.io/weather.dashboard/",
            description: "is an app that uses the OpenWeatherMap API to generate weather forecasts.",
            image: Weather
        },
    ]
    return (
        <div className='container-sm'>

            <h1 className="text-center">See some of my recently deployed projects below!</h1>
            <Project data={apps}/>
        </div>
    )
}

export default Projects