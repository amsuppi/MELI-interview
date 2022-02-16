import { useState ,useEffect} from "react"

export const useProductApi = (id) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(res => res.json())
            .then(result =>{
                setData(result)
                console.log("dataa", result)
            })
        }
        getInfo()
    }, [id])

    return { data}
}