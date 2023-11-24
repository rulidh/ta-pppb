import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function TutorialDetail() {
    let { userId } = useParams();
    const [data, setData]= useState();

    // Loader
    const [isLoaded, setIsLoaded]= useState(false);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(()=> {
        const fetchData= async()=> {
            setIsLoading(true);
            try {
                const response= await axios.get(`http://localhost:3001/tutorial?user=${userId}`);
                
                if(response.status === 200) {
                    setData(response.data);
                    setIsLoaded(true);
                    setIsLoading(false);
                    console.log(data);
                }            
            } catch(err) {
                console.error(err)
                setIsLoading(false);
            }
        };
        if(!isLoaded){
            fetchData();
        };
    }, [isLoaded])
    return(
        <div className="tutorial-container">
            {!data || isLoading ? (
                <div className="center">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="tutorial-detail">
                    {data.map((item, index)=> {
                        return (
                            <div className="detail-body" key={index}>
                                <h1 className="detail-title">{item.title}</h1>
                                <iframe className="tutorial-video" src={item.video}></iframe>
                                <div className="account">
                                    <img src={item.user_img} className="account-img"></img>
                                    <h3 className="account-user">{item.user}</h3>
                                </div>
                                <h4 className="detail-description">Deskripsi Video</h4>
                                <p className="detail-text">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}