import React from "react"

import "./search-box.style.css"


export const SearchBox = ({placeholder, eventHandler}) => (
    
    <input 
    className="searchBox" 
    type="search" 
    placeholder={placeholder} 
    onChange={eventHandler}
    /> 
)
