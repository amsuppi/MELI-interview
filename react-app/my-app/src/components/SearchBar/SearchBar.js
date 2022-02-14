import React, { useState } from 'react';
import logo from '../../img/Logo_ML.png'
import search from '../../img/ic_Search.png'

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
            <form className="search-form" onSubmit={ SendInfoHandler }>
            <input type="search" 
                placeholder="Nunca dejes de buscar"
                value={result}
                onChange={setResultHandler}/>
           <input type="image" src={search}/>
            </form>
        </header>
    )
}

export default SearchBar;