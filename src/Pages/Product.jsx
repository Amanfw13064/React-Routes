import { useEffect ,useState} from "react"
import {Link} from 'react-router-dom'

export const Product=()=>{
    const [product,setProduct]=useState([])
    const [page,setPage]=useState(1)
    useEffect(()=>{
        fetch(`http://localhost:3001/Product?_page=${page}&_limit=4`)
        .then((res)=>res.json())
        .then((res)=>{ 
            setProduct(res)
        })
    },[page])
    const handle=(val)=>{
            setPage(page+val)  
    } 
    return <div><div id="product">
       {product.map(e=>{
           return  <Link id="link" to={`/product/${e.id}`}><div key={e.id}>
             <img src={e.image} alt="" />
                 <p>{e.title}</p>
           </div></Link>
       })}
    </div>
    <button onClick={()=>{
        handle(-1)
    }}>Prev</button>
    <button onClick={()=>{
        handle(1)
    }}>Next</button>
    </div> 
}