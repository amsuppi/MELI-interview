import { useState ,useEffect} from "react"

export const useProductApi = (id) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getInfo = async ()=> {
            await fetch(`http://localhost:5000/items${id}`)
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