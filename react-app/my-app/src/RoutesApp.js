import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ListComponents from './components/ListComponents/ListComponents';
import SearchBar from './components/SearchBar/SearchBar';
import OnlyProduct from './components/OnlyProduct/OnlyProduct';

const RoutesApp = ()=>{
    const [value, setValue] = useState("")
    return(
    <>
    <SearchBar setValue={setValue}/>
    <Routes>
        <Route path="/"/>
        <Route path="items/search" element={<ListComponents value={value}/>}>
            <Route path=":search" element={<ListComponents/>} />
        </Route>
        <Route path="items" element={<OnlyProduct />}> 
            <Route path=":id" element={<OnlyProduct />}/> 
        </Route>
    </Routes>
    </>
    )

}

export default RoutesApp;