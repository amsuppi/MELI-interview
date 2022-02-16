import React, { useEffect, useState } from 'react';
import './styles.scss';

const OnlyProduct = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getInfo = async ()=>{
            await fetch("http://localhost:5000/items/:3")
                .then(res => res.json())
                .then(result =>{
                    setData(result.response)
                    console.log(result.response)
                })
        }
        getInfo();
    }, [])
    return(
            // <div>{data.id}</div>
            <div className="only-product">
                <div className="info-container">
                <img src={data.picture}/>
                <div className="principal-container">
                    <div className="secondary-container">
                        <h5>{data.condition} - </h5>
                        <h5>{data.sold_quantity} vendidos</h5>
                    </div>
                    <h2>{data.title}</h2>
                    <h1>$ {data.price?.currency}</h1>
                    <button>Comprar</button>
                </div>
                </div>
                <div>
                <h4>Descripción del producto</h4>
                <p>{data.description}</p>
                </div>
            </div>
            
        
    )
}

export default OnlyProduct;