import React from "react"
import {Link } from "react-router-dom"


function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-info">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Alexander Camacho
        </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header