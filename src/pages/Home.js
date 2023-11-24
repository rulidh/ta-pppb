import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Card from '../components/card/index';

// images
import tavern from './img/home.jpg';

export default function Home() {
    const [hasil, setHasil]= useState();
    const [query, setQuery]= useState();
    const [type, setType]= useState('classes');

    // Loader
    const [isLoaded, setIsLoaded]= useState(false);
    const [isLoading, setIsLoading]= useState(false);

    const URL= 'https://www.dnd5eapi.co/api/';
    
    useEffect(()=> {
        const fetchData= async()=> {
            setIsLoading(true);
            try {
                var response= await axios.get(URL+type);

                if(query) {
                    response= await axios.get(URL+type+query);
                }
                
                if(response.status === 200) {
                    setHasil(response.data);
                    setIsLoaded(true);
                    setIsLoading(false);
                    console.log(hasil.results);
                }

            } catch(err) {
                console.error(err);
                setIsLoading(false);
            }
        };
        if(!isLoaded){
            fetchData();
        };
    }, [isLoaded, query]);

    const onSearch= (e)=> {
        if(e.key==="Enter") {
            setIsLoaded(false);
            setQuery("?name="+e.target.value);
        }
    }

    return(
        <div className="container" style={{ backgroundImage: `url(${tavern})` }}>
            <img src={tavern} className="img-container"></img>
                <h1 style={{ color: "whitesmoke", textAlign: "center" }}>Start Your Journey Here</h1>
                <ul className="center">
                    <li><button className="option-btn" onClick={()=> {setIsLoaded(false); setQuery(); setType('classes/');}}><b>Kelas</b></button></li>
                    <li><button className="option-btn" onClick={()=> {setIsLoaded(false); setQuery(); setType('monsters/');}}><b>Monster</b></button></li>
                    <li><button className="option-btn" onClick={()=> {setIsLoaded(false); setQuery(); setType('races/');}}><b>Ras</b></button></li>
                </ul>       
                <div className="center">
                    <input type="text" placeholder="Cari Ras, Kelas, Monster Disini..." className="search-bar" onKeyDown={(e)=> onSearch(e)}/>
                </div>      
            {!hasil || isLoading ? (
                <div className="center">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="card-container">
                    {hasil.results.map((item, index)=> {
                        return (
                            <Card data={item} key={index}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}