import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// css
import './index.css';

export default function index({data, loc}) {
    return (
        <div className="card-detail">
            {(()=> {
                if(loc.url.includes('classes')) {
                    return (
                        <div className="detail-body">
                            <section>
                                <h1>Nama : {data.name}</h1>
                                <h1>Hit Points : {data.hit_die}</h1>
                                <h1>Starting Equipment</h1>
                                {data.starting_equipment.map((item, index)=> {
                                    return (
                                        <ul key={index}>
                                            <li><h3>{item.equipment.name}({item.quantity})</h3></li>
                                        </ul>
                                    )
                                })}
                            </section>
                            <span>
                                <h1>Keahlian</h1>
                                {data.proficiencies.map((item, index) => {
                                    return(
                                        <ul key={index}>
                                            <li className="pro-item"><b>{item.name}</b></li>
                                        </ul>
                                    )
                                })}
                            </span>
                        </div>
                    )
                } else if (loc.url.includes('monsters')) {
                    return (
                        <div className="detail-body">
                            <section>
                                <h1>Nama : {data.name}</h1>
                                <h1>Hit Points : {data.hit_points}</h1>
                                <h1>Tipe Monster : {data.type}</h1>
                                <h1>Sifat : {data.alignment}</h1>
                                <h1>Kemampuan Spesial</h1>
                                {data.special_abilities.map((item, index)=> {
                                    return (
                                        <ul key={index}>
                                            <li><h3>{item.name}</h3></li>
                                        </ul>
                                    )
                                })}
                            </section>
                            <span>
                                <h1>Keahlian</h1>
                                {data.proficiencies.map((item, index) => {
                                    return(
                                        <ul key={index}>
                                            <li className="pro-item"><b>{item.proficiency.name}</b></li>
                                        </ul>
                                    )
                                })}
                            </span>
                        </div>
                    )
                } else {
                    return(
                        <div className="detail-body">
                            <section>
                                <h1>Nama : {data.name}</h1>
                                <h1>Kecepatan : {data.speed}</h1>
                                <h1>Sifat</h1>
                                {data.traits.map((item, index)=> {
                                    return (
                                        <ul key={index}>
                                            <li><h3>{item.name}</h3></li>
                                        </ul>
                                    )
                                })}
                                <h1>Kemampuan Bahasa</h1>
                                {data.languages.map((item, index)=> {
                                    return (
                                        <ul key={index}>
                                            <li><h3>{item.name}</h3></li>
                                        </ul>
                                    )
                                })}
                                <h1>Deskripsi</h1>
                                <p>{data.alignment}</p>
                                <p>{data.age}</p>
                            </section>
                        </div>
                    )
                }
            })()}
        </div>
    )
}