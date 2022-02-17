import { useState ,useEffect} from "react"

export const useFetchApi = (apiString) => {
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    console.log(apiString)

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items/search?q=:${apiString}`)
            .then(res => res.json())
            .then(result => {
                console.log("info necesaria",result)
                setTimeout(() => {
                    setResult(result.items)
                    setCategories(result.categorys)
                    setLoading(false)
                }, 1500);
            }).catch((e)=>{
                console.error(e)
            })
        }
        getInfo()

    }, [apiString])

    return { result , categories , loading }
}