import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ListComponents from './components/ListComponents/ListComponents';

const BodyRender = ()=>{
    const [value, setValue] = useState("")
    return(
        <div>
            <SearchBar setValue={setValue}/>
            <ListComponents value={value}/>
        </div>
    )
}

export default BodyRender;