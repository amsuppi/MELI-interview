
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  shipping  from '../../img/ic_shipping.png';
import './styles.scss';
import { useSearchParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';

const ListComponents = ({result})=> {
    console.log(result)

    return(
        result.map((data, id)=>(
            <div key ={id} className="list-component">
             <Link  key={id} to={`/item/${data.id}`}>
            <img src={data.picture}/>
            <div className="principal-container">
                <div className="secondary-container">
                    <h1>${data.price.amount}</h1>
                    <img src={shipping} className={data.free_shipping ? undefined : "hidden"} />
                </div>
                <h5>{data.title}</h5>
            </div>
            <div className="city-container">
            <h6>{data.address}</h6>
            </div>
            </Link>
            </div>
        ))
       
    )
}

export default ListComponents ;