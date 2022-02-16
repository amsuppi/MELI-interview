
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  shipping  from '../../img/ic_shipping.png';
import './styles.scss';
import { useSearchParams } from 'react-router-dom';

const ListComponents = ({value})=> {
    const [searchParams] = useSearchParams();
    let url = [...searchParams];
    console.log(url); 


    console.log(value)
    const [data, setData] = useState([]);

    useEffect(()=>{
        const currentParams = Object.fromEntries([...searchParams]);
        let string = currentParams.search.replace(/['"]+/g, '')
        let apiString = string.charAt(0).toUpperCase() + string.slice(1);

        const getInfo = async ()=>{
            await fetch(`http://localhost:5000/items/search?q=${apiString}`)
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    console.log(result)
                    setData(result)
                })
        }
        getInfo();
    }, [searchParams])

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