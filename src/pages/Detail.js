import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

// Components
import DetailCard from '../components/cardDetail/index';

// img
import Wallpaper from "./img/detail.jpg";

export default function Detail() {
    const location= useLocation();
    const data= location.state;

    const [result, setResult]= useState();

    // Loader
    const [isLoaded, setIsLoaded]= useState(false);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(()=> {
        const fetchData= async()=> {
            setIsLoading(true);
            try {
                const response= await axios.get('https://www.dnd5eapi.co'+ data.url);
                
                if(response.status === 200) {
                    setResult(response.data);
                    setIsLoaded(true);
                    setIsLoading(false);
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
        <div className="container" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <img src={Wallpaper}></img>
            {!result || isLoading ? (
                <div className="center">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="detail-card-container">
                    <DetailCard data={result} loc={data}/>
                </div>
            )}
        </div>
    )
}