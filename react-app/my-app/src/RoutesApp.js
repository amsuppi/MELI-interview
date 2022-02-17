import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ListComponents from './components/ListComponents/ListComponents';
import OnlyProduct from './components/OnlyProduct/OnlyProduct';
import SearchBar from './components/SearchBar/SearchBar';
import ScreenListComponents from './ScreenListComponents';

const RoutesApp = ()=>{
    return(
    <>
    <SearchBar/>
    
    <Routes>
        <Route path="/"/>
        <Route path="items" element={<ScreenListComponents />}>
            <Route path=":search" element={<ScreenListComponents/>} />
        </Route>
        <Route path="item" element={<OnlyProduct />}> 
            <Route path=":id" element={<OnlyProduct />}/> 
        </Route>
    </Routes>
    </>
    )

}

export default RoutesApp;