import React, { useEffect, useState } from 'react';
import ListComponents from './components/ListComponents/ListComponents';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import { useFetchApi } from './hooks/useFetchApi';

const ScreenListComponents = () =>{

    const [searchParams] = useSearchParams();

    const currentParams = Object.fromEntries([...searchParams]);

    const string = currentParams.search.replace(/['"]+/g, '')
    const apiString = string.charAt(0).toUpperCase() + string.slice(1);

    const { result, 
            categories, 
            loading} = useFetchApi(apiString)
    
    console.log(loading)

    return (
        <>
        <Breadcrumb categories={categories}/>
        <ListComponents result={result} loading={loading}/>

        </>
    )
}

export default ScreenListComponents;