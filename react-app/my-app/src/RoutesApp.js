import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from './components/SearchBar/SearchBar';
import ScreenListComponents from './ScreenListComponents';
import ScreenOnlyProduct from './ScreenOnlyProduct';

const RoutesApp = ()=>{
    return(
    <>
    <SearchBar/>
    
    <Routes>
        <Route path="/"/>
        <Route path="items" element={<ScreenListComponents />}>
            <Route path=":search" element={<ScreenListComponents/>} />
        </Route>
        <Route path="item" element={<ScreenOnlyProduct />}> 
            <Route path=":id" element={<ScreenOnlyProduct />}/> 
        </Route>
    </Routes>
    </>
    )

}

export default RoutesApp;