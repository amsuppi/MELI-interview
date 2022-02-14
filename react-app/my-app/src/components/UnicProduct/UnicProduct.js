import React, { useEffect, useState } from 'react';

const UnicProduct = ()=>{
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
            <div>
                <img src={data.picture}/>
                <div>
                    <div>
                        <h5>{data.condition} -</h5>
                        <h5>{data.sold_quantity} vendidos</h5>
                    </div>
                    <h2>{data.title}</h2>
                    <h1>$ {data.price.currency}</h1>
                    <button>Comprar</button>
                </div>
                <h1>Descripción del producto</h1>
                <p>{data.description}</p>
            </div>
            
        
    )
}

export default UnicProduct;