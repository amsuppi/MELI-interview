import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ListComponents from './components/ListComponents/ListComponents';
import OnlyProduct from './components/OnlyProduct/OnlyProduct';
import SearchBar from './components/SearchBar/SearchBar';

const RoutesApp = ()=>{
    return(
    <>
    <SearchBar/>
    
    <Routes>
        <Route path="/"/>
        <Route path="items" element={<ListComponents />}>
            <Route path=":search" element={<ListComponents/>} />
        </Route>
        <Route path="item" element={<OnlyProduct />}> 
            <Route path=":id" element={<OnlyProduct />}/> 
        </Route>
    </Routes>
    </>
    )

}

export default RoutesApp;