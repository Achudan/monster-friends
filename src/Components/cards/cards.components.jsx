import React from "react";
import "./cards.styles.css";
export const Card = props =>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='monster'/> 
        <p>{props.monster.name}</p>
        <p>Rules {props.monster.address.city}</p>
    </div>
);