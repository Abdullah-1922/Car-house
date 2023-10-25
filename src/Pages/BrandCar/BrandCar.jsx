import { Link, useLoaderData } from "react-router-dom";

const BrandCar = () => {
    const data =useLoaderData()
    console.log(data.length>0);
    return (
        <div className="container mt-10 mx-auto">
             {
              data.length>0 ?  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {
               data.map(product=><div key={product._id} className="card pt-8 overflow-hidden  rounded-2xl bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200 shadow-xl">
               <figure><img className="h-[300px] w-3/4 mx-auto" src={product.image} alt={product.name} /></figure>
               <div className="card-body">
                 <h2 className="text-xl font-bold flex gap-10">
                   {product.name}
                   <div className="badge badge-secondary">{product.rating}</div>
                 </h2>
                  <p >{product.description}</p>
                 <p>Price: {product.price}</p>
                 <div className="card-actions justify-end">
                   <div className="badge badge-outline">{product.carBrand}</div> 
                   <div className="badge badge-outline">{product.type}</div>
                 </div>
                 <div className="mx-auto flex gap-5">
                   <Link className=" mx-auto " to={`/update/${product._id}`}> <button className="btn">Update Card</button></Link> 
                <Link className=" mx-auto mr-5" to={`/details/${product._id}`}> <button className="btn">Show Details</button></Link> 
                 </div>
               
               </div>
             </div>)
              }
              </div> :<div className="text-center text-4xl mt-20 font-bold">No Product Found</div>
             }
        </div>
    );
};

export default BrandCar;