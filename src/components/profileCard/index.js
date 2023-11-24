import React from "react";

import './index.css';
import user from './user.jpg';

export default function index() {
    return(
        <div className="profile-card">
            <img src={user} className="user-img"></img>
            <h1 className="h1-text">Name: Ruli Dharmawan</h1>
            <h1 className="h1-text">NIM: 21120121140089</h1>
            <h3 className="h3-text no-margin">Races: Human</h3>
            <h3 className="no-margin">Classes: Ordinary Student</h3>
            <div className="profile-desc">
                <div className="profile-proficiencies">
                    <h4 className="h4-text">Keahlian</h4>
                    <ul className="prof-prof">
                        <li className="prof-item">Programming</li>
                        <li className="prof-item">Bargain</li>
                        <li className="prof-item">Power Sleep</li>
                    </ul>
                </div>
                <div className="profile-skill">
                    <h4 className="h4-text">Kemampuan Bahasa</h4>
                    <ul className="prof-skill">
                        <li className="prof-item">Indonesian(S)</li>
                        <li className="prof-item">English(E)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}