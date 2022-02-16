import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from "react-router-dom"
import { useProductApi } from '../../hooks/useProductApi';

const OnlyProduct = ()=>{
    const [description, setDescription] = useState([])
    const { id }  = useParams();
    const result = useProductApi(id)
    const data = result.data
    console.log(console)

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`https://api.mercadolibre.com/items/${id}/description`)
            .then(res => res.json())
            .then(result =>{
                console.log(result)
                console.log("result", result.plain_text)
                setDescription(result.plain_text)
            })
        }
        getInfo()
    }, [id])
    return(
            <div className="only-product">
                <div className="info-container">
                <img src={data.secure_thumbnail}/>
                <div className="principal-container">
                    <div className="secondary-container">
                        <h5>{data.condition} - </h5>
                        <h5>{data.sold_quantity} vendidos</h5>
                    </div>
                    <h2>{data.title}</h2>
                    <h1>$ {data.price}</h1>
                    <button>Comprar</button>
                </div>
                </div>
                <div>
                <h4>Descripción del producto</h4>
                <p>{description}</p>
                </div>
            </div>
            
        
    )
}

export default OnlyProduct;