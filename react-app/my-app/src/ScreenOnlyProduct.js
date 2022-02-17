
import React, { useState } from 'react';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import OnlyProduct from './components/OnlyProduct/OnlyProduct';
import { useParams } from "react-router-dom"
import { useProductApi } from './hooks/useProductApi';

const ScreenOnlyProduct = () =>{
    const { id }  = useParams();
    const { result , categories } = useProductApi(id);

    console.log(result, "y" , categories , "y", {id})

    return (
        <>
        <Breadcrumb categories={categories}/>
        <OnlyProduct id={id} result={result} />
        </>
    )
}

export default ScreenOnlyProduct;