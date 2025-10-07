"use client"
import{useEffect,useState}from"react"
export default function List() {
    const [product,setProduct]=useState([])
    useEffect(async()=>{
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json()
        console.log(data)
        setProduct(data.products)
    },[])
    return (<div>

        <h1>this is my product list</h1>
        {
            product.map((item)=>(
                <h3>product Name:{item.title},price:{item.price}</h3>
            ))
        }
        </div>
    )

}