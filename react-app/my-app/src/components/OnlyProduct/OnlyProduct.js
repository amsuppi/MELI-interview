import React, { useEffect, useState } from 'react';
import './styles.scss';

const OnlyProduct = ({result, id})=>{
    console.log(result, "y" , id)
    const [description, setDescription] = useState([])
    

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
                <img src={result.picture}/>
                <div className="principal-container">
                    <div className="secondary-container">
                        <h5>{result.condition} - </h5>
                        <h5>{result.sold_quantity} vendidos</h5>
                    </div>
                    <h2>{result.title}</h2>
                    <h1>$ {result.price?.amount}</h1>
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