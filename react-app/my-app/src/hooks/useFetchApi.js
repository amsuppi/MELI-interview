import { useState ,useEffect} from "react"

export const useFetchApi = (apiString) => {
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState([]);

    console.log(apiString)

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${apiString}`)
            .then(res => res.json())
            .then(result =>{
                setResult(result.results)
                console.log("info necesaria",result)
                setCategories(result.filters[0].values[0].name)
            })
        }
        getInfo()
    }, [apiString])

    return { result , categories }
}