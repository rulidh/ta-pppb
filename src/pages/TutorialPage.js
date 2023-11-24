import React, { useState, useEffect } from "react";
import axios from "axios";
import wallpaper from './img/tutorialpage.jpg';

// components
import TCard from '../components/tutorialCard';

export default function Tutorial(){
    const [data, setData]= useState();

    // Loader
    const [isLoaded, setIsLoaded]= useState(false);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(()=> {
        const fetchData= async()=> {
            setIsLoading(true);
            try {
                const response= await axios.get('https://mocki.io/v1/6671b380-66a1-4204-a780-5f82a9955d83');
                
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
        <div className="container" style={{ backgroundImage: `url(${wallpaper})`}}>
            <img src={wallpaper} className="img-container"></img>
            {!data || isLoading ? (
                <div className="center">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="tutorial-card-container">
                    {data.tutorial.map((item, index)=> {
                        return (
                            <TCard data={item} key={index}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}