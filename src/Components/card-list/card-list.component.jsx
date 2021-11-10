import React from "react";
import { Card } from "../cards/cards.components";
import "./card-list-styles.css";
export const CardList = props => (
    <div className="card-list">
        {props.monsters.map((monster)=>{
            return <Card key={monster.id} monster={monster}/>
            })}
    </div>
);