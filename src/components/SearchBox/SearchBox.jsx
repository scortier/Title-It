import React from 'react';
import './SearchBox.css';

//we can destructure the prop like prop.onInputChange  as onInputChange
const SearchBox=({onInputChange})=>{
    return (
        <div className="search-container">
            <input 
            onChange={(event)=> onInputChange(event.target.value)} 
            placeholder="Type keywords" 
            className="search-input" 
            />
        </div>
    );
};

export default SearchBox;