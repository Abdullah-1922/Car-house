import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const carBrands = [
    'Toyota',
    'Ford',
    'Honda',
    'BMW',
    'Mercedes-Benz',
    'MG-Motor',
  ];

  const data = useLoaderData();
  console.log(data);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const Price = form.price.value;
    const Img = form.image.value;
    const Type = form.type.value;
    const carBrand = form.carBrand.value;

    const Description = form.description.value;
    const Rating = form.rating.value;
    const productData = {
      name: Name,
      price: Price,
      image: Img,
      type: Type,
      carBrand: carBrand,
      description: Description,
      rating: Rating,
    };
    console.log(productData);

          fetch(`https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/allProducts/${data._id}`,{
              method: 'PUT',
              headers: {

                  'Content-Type': 'application/json'
          }
          ,body: JSON.stringify(productData)
      }).then(res=>res.json())
      .then(data=>{
          console.log(data);
         
        if(data.modifiedCount===1){
            Swal.fire(
              'Good job!',
              'Product Updated',
              'success'
            )
        }
          
            form.reset();
      }) 
  };
  return (
    <div>
      <div className='container mx-auto pb-20'>
        <h2 className='text-2xl uppercase md:text-3xl lg:text-4xl  my-5 text-center bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-bold'>
          {' '}
          Update Products{' '}
        </h2>
        <form
          className='w-[90%]  mx-auto md:w-full '
          onSubmit={handleUpdateProduct}>
          <div className='grid md:grid-cols-2 font-bold gap-8'>
            <div className=' '>
              <p className=' '>NAME :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='name'
                id=''
                placeholder='Name'
                defaultValue={data.name}
              />
            </div>
            <div>
              <p className=' '>CAR BRAND :</p>
              <select
                className='w-[90%]  md:w-full p-1'
                name='carBrand'
                id=''
                defaultValue={data.carBrand}
               >
                <option  value='' disabled>
                  -- Select a Car Brand --
                </option>
                {carBrands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className=' '>IMAGE :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='image'
                id=''
                placeholder='Image URL'
                defaultValue={data.image}
              />
            </div>
            <div>
              <p className=' '>TYPE :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='type'
                id=''
                placeholder='Type'
                defaultValue={data.type}
              />
            </div>
            <div>
              <p className=' '>PRICE :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='price'
                id=''
                placeholder='    Price'
                defaultValue={data.price}
              />
            </div>
            <div>
              <p className=' '>SHORT DESCRIPTION :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='description'
                id=''
                placeholder='Short Description'
                defaultValue={data.description}
              />
            </div>
            <div>
              <p className=' '>RATING :</p>
              <input
                className='w-[90%]  md:w-full p-1'
                type='text'
                name='rating'
                id=''
                placeholder='    Rating'
                defaultValue={data.rating}
              />
            </div>
          </div>
          <button
            className='btn uppercase mt-5 mx-auto text-center w-full'
            type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
