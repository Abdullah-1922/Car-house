import { useState } from "react";
import {  useLoaderData } from "react-router-dom";

const MyCart = () => {
    const data =useLoaderData()
    const [cart,setCart] = useState(data);
    const handleDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/allCarts/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount===1){
               const remainingCart= cart.filter(item=>item._id!=id)
               setCart(remainingCart);
            }
        })
    }
    console.log(data);
    return (
        <div className="container rounded-2xl  mt-10 mx-auto">
            <h2 className="text-4xl my-5 text-center font-bold">MY CARTS </h2>
        <div className="grid grid-cols-1 rounded-2xl  gap-10 md:grid-cols-2">
       {
        cart.map(product=><div key={product._id} className="card  rounded-2xl  bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200 pt-8 shadow-xl">
        <figure><img className="h-[300px] w-3/4 mx-auto" src={product.image} alt={product.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">{product.rating}</div>
          </h2>

          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.carBrand}</div> 
            <div className="badge badge-outline">{product.type}</div>
          </div>
         
           
          <button onClick={()=>handleDelete(product._id)}  className="btn mx-auto ">Remove from CART</button>
          
         
        </div>
      </div>)
       }
       </div>
    </div>
    );
};

export default MyCart;