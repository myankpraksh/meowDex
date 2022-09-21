import React from "react";

const SearchBox = (prop)=>{
return(
    <div className="pa2">
        <input type="search" placeholder="Find your Warrior" className="pa3 ba b--green bg-lightest-blue" onChange={prop.prop}/>
    </div>
);
};

export default SearchBox;