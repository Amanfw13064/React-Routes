import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export const ProductDetails=()=>{
    const {id}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:3001/Product?id=${id}`)
        .then((res)=>res.json())
        .then((res)=>{ 
            setProduct(res[0])
        })
    },[])
    return <div>
        <h1>Product Details</h1>
        <div id="productDetails">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price-$ {product.price}</p>
            <p>Category-{product.category}</p>


        </div>
    </div>
}