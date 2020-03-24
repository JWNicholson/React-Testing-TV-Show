import React from 'react';
import Dropdown from 'react-dropdown';
import parse from 'html-react-parser';

const ShowsList = [
    {
        id:1,
        name:"Under the Dome"
     },
    {
        id:82,
        name:"Game of Thrones",
        }
]

const ShowSelect = () =>{
    return (
        <Dropdown 
    options={ShowsList}
    value="Select a show"
/>
    );
};

export default ShowSelect;



