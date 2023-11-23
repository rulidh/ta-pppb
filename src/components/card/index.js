import React from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";

export default function index({data}) {
    const datas= {url: data.url};

    const navigate= useNavigate();
    const navigateDetail= ()=> {
        navigate('detail/'+ data.index, {state: datas})
    }


    return(
        <div className="card">
            {data ? (
                <>
                    <figure>
                        <div className="card-body">
                            <h2 className="dnd-name">{data.name}</h2>
                            <a className="detail-btn" onClick={()=> navigateDetail()}><b>Detail</b></a>
                        </div>
                    </figure>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}