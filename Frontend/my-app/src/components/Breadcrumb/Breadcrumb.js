import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useSearchParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';

const Breadcrumb = ({categories})=>{
    console.log(categories)
    const element = categories.map((data, id)=>(
        <p key={id}>{data.name}</p>
    ))
    return (
        <div className="breadcrumb">
           {element}
        </div>
    )
}

export default Breadcrumb
