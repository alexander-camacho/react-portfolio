import React from "react"
import "./style.css"

const Project = (props) => {
    return (
        <div className="container-fluid">
            {props.data.map((value, index) => {

                return (
                    <div className="text-center" key={index}>
                        <b>{value.title}</b> {value.description} |
                        <a className="link" href={value.code}> Github</a> |
                        <a className="link" href={value.live}> Live App
                        <img className="img-thumbnail" src={value.image}  alt="app screenshot" /></a>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Project