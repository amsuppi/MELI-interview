
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  shipping  from '../../img/ic_shipping.png';
import './styles.scss';
import { formatNumber } from '../../helpers/formatNumber';

const ListComponents = ({result, loading})=> {
    console.log(loading)
    return(
        <>
        {loading && <div className="loading"></div>}
        {result.map((data, id)=>(
            <div key ={id} className="list-component">
             <Link  key={id} to={`/item/${data.id}`}>
            <img src={data.picture}/>
            <div className="principal-container">
                <div className="secondary-container">
                    <h1>${formatNumber(data.price.amount)}</h1>
                    <img src={shipping} className={data.free_shipping ? undefined : "hidden"} />
                </div>
                <h5>{data.title}</h5>
            </div>
            <div className="city-container">
            <h6>{data.address}</h6>
            </div>
            </Link>
            </div>
       
        ))}
        </>
    )
}

export default ListComponents ;