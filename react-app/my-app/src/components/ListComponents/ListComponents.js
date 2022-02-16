
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  shipping  from '../../img/ic_shipping.png';
import './styles.scss';
import { useSearchParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';

const ListComponents = ()=> {
    const [searchParams] = useSearchParams();

    const currentParams = Object.fromEntries([...searchParams]);

    const string = currentParams.search.replace(/['"]+/g, '')
    const apiString = string.charAt(0).toUpperCase() + string.slice(1);
    const { result , categories} = useFetchApi(apiString)

    console.log("categories" , categories)
    
    const filterComponent = result.slice(0, 4);
    

    return(
        filterComponent?.map((data, id)=>(
            <div key ={id} className="list-component">
             <Link  key={id} to={`/item/${data.id}`}>
            <img src={data.thumbnail}/>
            <div className="principal-container">
                <div className="secondary-container">
                    <h1>${data.price}</h1>
                    <img src={shipping} className={data.shipping.free_shipping ? undefined : "hidden"} />
                </div>
                <h5>{data.title}</h5>
            </div>
            <div className="city-container">
            <h6>{data.address.state_name}</h6>
            </div>
            </Link>
            </div>
        ))
       
    )
}

export default ListComponents ;