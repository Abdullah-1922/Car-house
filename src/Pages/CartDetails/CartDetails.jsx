import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartDetails = () => {
  const cartDetails = useLoaderData();
  console.log(cartDetails);
  const handleCart=(cartDetails)=>{
    fetch( 'https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/carts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartDetails)
    } ).then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged=== true){
        Swal.fire(
          'Good job!',
          'Successfully Add To Cart!',
          'success'
        )
      }
    })

  }
  return (
    <div className='container mt-10 mx-auto'>
      <div className='card pt-5 md:py-10 px-5 flex flex-col md:flex-row card-side bg-gradient-to-r from-fuchsia-500 to-pink-500 shadow-xl'>
        <figure  className='bg-cover bg-center bg-no-repeat md:w-1/2 mx-auto h-[300px] md:h-[500px] lg:h-[h-550px]'>
          <img
         className=''
            src={cartDetails.image}
            alt='Movie'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title '>{cartDetails.name}</h2>
         
          <p className='font-bold'>Brand: {cartDetails.carBrand}</p>
          <p className='font-bold'>Type: {cartDetails.type}</p>
          <p className='font-bold'>Rating: {cartDetails.rating}</p>
          <p className='font-bold'>Price: {cartDetails.price}</p>
          <p className='font-bold'>{cartDetails.description}</p>
          <div className='card-actions justify-end'>
            <button  onClick={()=>handleCart(cartDetails)}  className='btn btn-primary'>ADD to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
