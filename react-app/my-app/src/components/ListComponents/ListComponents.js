
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  shipping  from '../../img/ic_shipping.png';
import './styles.scss';

const ListComponents = ({value})=> {
    console.log(value)
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getInfo = async ()=>{
            await fetch("http://localhost:5000/items/")
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    let item = result.productos.items
                    console.log(item)
                    setData(item)
                })
        }
        getInfo();
    }, [value])

    return(
        data?.map((data, id)=>(
            <div className="list-component">
             <Link  key={id} to={`/items/${data.id}`}>
            <img src={data.picture}/>
            <div className="principal-container">
                <div className="secondary-container">
                    <h1>${data.price?.currency}</h1>
                    <img src={shipping} className={data.free_shipping ? undefined : "hidden"} />
                </div>
                <h5>{data.title}</h5>
            </div>
            <div className="city-container">
            <h6>Mendoza</h6>
            </div>
            
            </Link>
            </div>
        ))
       
    )
}

export default ListComponents ;