import React from "react"


function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
            Alexander Camacho
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li>
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li>
                    <a className="nav-link" href="/projects">Projects</a>
                </li>
            </ul>
        </div>
    </nav >
    )
}

export default Header