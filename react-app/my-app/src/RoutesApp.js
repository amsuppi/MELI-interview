import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ListComponents from './components/ListComponents/ListComponents';
import SearchBar from './components/SearchBar/SearchBar';
import UnicProduct from './components/UnicProduct/UnicProduct';

const RoutesApp = ()=>{
    const [value, setValue] = useState("")
    return(
    <Routes>
        <Route path="/" element={<SearchBar setValue={setValue}/>} />
        <Route path="items/search" element={<ListComponents value={value}/>} />
        <Route path="items/:" element={<UnicProduct />} />
    </Routes>
    )

}

export default RoutesApp;