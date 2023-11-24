import React from "react";

import profile from "./img/profile.jpg";

// components
import PCard from '../components/profileCard';

export default function Profile() {
    return(
        <div className="container profile-container" style={{ backgroundImage:`url(${profile})` }}>
            <PCard/>
        </div>
    )
}