import { Link, useLoaderData } from "react-router-dom";


const AllProducts = () => {
    const allProducts=useLoaderData()
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
           {
            allProducts.map(product=><div key={product._id} className="card  bg-base-100 shadow-xl">
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
             <Link className=" mx-auto " to={`/update/${product._id}`}> <button className="btn">Update Card</button></Link> 
            </div>
          </div>)
           }
           </div>
        </div>
    );
};

export default AllProducts;