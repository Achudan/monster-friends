import React from "react";
import "./searchbox.styles.css";
export const SearchBox = (props) =>(
    <input className="search-box" placeholder={props.placeholder} onChange={props.handleChange}/>
);