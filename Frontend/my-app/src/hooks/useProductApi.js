import { useState ,useEffect} from "react"

export const useProductApi = (id) => {
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data =>{
                setTimeout(() => {
                    setResult(data)
                    setCategories(data.categorys)
                    setLoading(false)
                    console.log(data)
                }, 1200);
            }).catch((e) =>{
                console.log(e)
            })
        }
        getInfo()
    }, [id])

    return { result , categories, loading}
}