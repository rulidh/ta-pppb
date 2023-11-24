import React from "react";
import './index.css'

export default function index() {

    return(
        <div className="navbar">
            <ul className="navbar-items">
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/tutorial">Tutorial</a></li>
                <li className="navbar-item"><a href="/profile">Profile</a></li>
            </ul>
        </div>
    )
}