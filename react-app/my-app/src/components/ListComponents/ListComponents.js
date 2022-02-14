
import React, { useEffect, useState } from 'react';

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

    function setProductHandler(id) {
        console.log("id" + id)
        
    }

    return(
        data?.map((data, id)=>(
            <div key={id}
                 onClick={() => setProductHandler(data.id)}>
            <img src={data.picture}/>
            <div>
                <div>
                    <h2>${data.price.currency}</h2>
                    <img />
                </div>
                <h5>{data.title}</h5>
            </div>
            <h6>Mendoza</h6>
            </div>
        ))
       
    )
}

export default ListComponents ;