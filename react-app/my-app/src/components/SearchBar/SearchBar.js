import React, { useState } from 'react';
import logo from '../../img/Logo_ML.png'
import search from '../../img/ic_Search.png'
import { Link } from "react-router-dom";
import './styles.scss';

const SearchBar = ({setValue})=>{
    const [result, setResult] = useState('')

    function SendInfoHandler(e) {
        e.preventDefault();
        console.log(result)
        if(result.length > 0) {
            setValue(result)
        }
       
    }

    function setResultHandler(e) {
        setResult(e.target.value)

    }
    return(
        <header>
            <img src={logo} alt="Mercado Libre"/>
            <form 
                className="search-form" 
                onSubmit={ SendInfoHandler }>
            <input type="search" 
                placeholder="Nunca dejes de buscar"
                value={result}
                className="search"
                onChange={setResultHandler}/>
            <Link to={`items?search="${result}"`}><input type="image" src={search}/></Link>
            </form>
        </header>
    )
}

export default SearchBar;