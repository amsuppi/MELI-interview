import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from "react-router-dom"
import { useProductApi } from '../../hooks/useProductApi';

const OnlyProduct = ()=>{
    const [description, setDescription] = useState([])
    const { id }  = useParams();
    const result = useProductApi(id)
    const data = result

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items/${id}/description`)
            .then(res => res.json())
            .then(result =>{
                console.log(result.descriprion)
                setDescription(result.descriprion)
            })
        }
        getInfo()
    }, [id])
    return(
            <div className="only-product">
                <div className="info-container">
                <img src={data.data.picture}/>
                <div className="principal-container">
                    <div className="secondary-container">
                        <h5>{data.data.condition} - </h5>
                        <h5>{data.data.sold_quantity} vendidos</h5>
                    </div>
                    <h2>{data.data.title}</h2>
                    <h1>$ {data.data.price?.amount}</h1>
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