import React from "react"

const Project = (props) => {
    return (
        <div>
            {props.data.map((value, index) => {

                return (
                    <div className="text-center container-sm" key={index}>
                        <b>{value.title}</b> {value.description} |
                        <a href={value.code}> Github Repo</a> |
                        <a href={value.live}> Live App
                        <img className="portfolio-img" src={value.image} alt="" /></a>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Project