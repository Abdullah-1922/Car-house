import {  useLoaderData } from "react-router-dom";

const MyCart = () => {
    const data =useLoaderData()
    const handleDelete=()=>{
        
    }
    console.log(data);
    return (
        <div className="container rounded-2xl  mt-10 mx-auto">
            <h2 className="text-4xl my-5 text-center font-bold">MY CARTS </h2>
        <div className="grid grid-cols-1 rounded-2xl  gap-10 md:grid-cols-2">
       {
        data.map(product=><div key={product._id} className="card  rounded-2xl  bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200 pt-8 shadow-xl">
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
         
           
          <button onClick={handleDelete}  className="btn mx-auto ">Remove from CART</button>
          
         
        </div>
      </div>)
       }
       </div>
    </div>
    );
};

export default MyCart;