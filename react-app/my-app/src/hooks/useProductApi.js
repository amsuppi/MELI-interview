import { useState ,useEffect} from "react"

export const useProductApi = (id) => {
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data =>{
                setResult(data)
                setCategories(data.categorys)
                console.log(data)
            })
        }
        getInfo()
    }, [id])

    return { result , categories}
}