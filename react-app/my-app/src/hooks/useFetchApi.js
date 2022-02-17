import { useState ,useEffect} from "react"

export const useFetchApi = (apiString) => {
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState([]);

    console.log(apiString)

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items/search?q=:casa`)
            .then(res => res.json())
            .then(result => {
                console.log("info necesaria",result)
                setResult(result.items)
                setCategories(result.categorys)
            })
        }
        getInfo()

    }, [apiString])

    return { result , categories }
}