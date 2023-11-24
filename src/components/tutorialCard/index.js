import React from "react";
import { useNavigate } from "react-router-dom";

// css
import './index.css'

export default function index(data, key) {
    const navigate= useNavigate();
    const navigateTutorial= ()=> {
        navigate(`${data.data.user}/`, {state: data})
    }

    return (
        <div className="tutorial-card-body">
            <div className="tutorial-card-img">
                <iframe src={data.data.video} className="thumbnail"></iframe>
            </div>
            <div className="div-lain">
                <h4 className="tutorial-text">{data.data.title}</h4>
                <button className="tutorial-btn" onClick={()=> navigateTutorial()}>Detail</button>
            </div>
        </div>

    )
}