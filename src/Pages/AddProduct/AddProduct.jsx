
import Swal from "sweetalert2";


const Add    = () => {
    const carBrands = ['Toyota', 'Ford', 'Honda', 'BMW', 'Mercedes-Benz', 'MG-Motor'];
  const handleAddProduct    = (e) => {
    e.preventDefault();
    const form =e.target
    const    Name = form.name.value
    const    Price = form.price.value
    const    Img = form.image.value
    const    Type = form.type.value
    const    carBrand = form.carBrand.value

    const    Description = form.description.value
    const    Rating = form.rating.value
    const    productData={
        name:   Name,
        price:   Price,
        image:   Img,
        type:   Type,
        carBrand:   carBrand,
        description:   Description,
        rating:   Rating}
        console.log(productData);
        fetch('https://assignment-10-server-3zpemp4ty-abdullah-1922.vercel.app/products',{
            method: 'POST',
            headers: {
               
                'Content-Type': 'application/json'
        }
        ,body: JSON.stringify(productData)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        form.reset();
        Swal.fire(
            'Good job!',
            'Product added',
            'success'
          )
    })

}
    return (
        <div className="container mt-10 px-5 py-10 rounded-2xl bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200 mx-auto">
            <h2 className="text-2xl uppercase md:text-3xl lg:text-4xl  my-5 text-center  font-bold "> ADD NEW PRODUCTS    </h2>
            <form className="w-[90%]  mx-auto md:w-full " onSubmit={handleAddProduct}>
                <div className="grid md:grid-cols-2 font-bold gap-8">
                    <div className=" ">
                        <p className=" ">NAME :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="name" id="" placeholder="    Name" />
                    </div>
                    <div>
                        <p className=" ">CAR BRAND :</p>
                        <select className="w-[90%]  md:w-full p-1" name="carBrand" id="" defaultValue="" >
                            <option value="" disabled>-- Select a Car Brand --</option>
                            {carBrands.map((brand, index) => (
                                <option key={index} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className=" ">IMAGE :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="image" id="" placeholder="Image URL" />
                    </div>
                    <div>
                        <p className=" ">TYPE :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="type" id="" placeholder="    Type" />
                    </div>
                    <div>
                        <p className=" ">PRICE :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="price" id="" placeholder="    Price" />
                    </div>
                    <div>
                        <p className=" ">SHORT DESCRIPTION :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="description" id="" placeholder="Short Description" />
                    </div>
                    <div>
                        <p className=" ">RATING :</p>
                        <input className="w-[90%]  md:w-full p-1" type="text" name="rating" id="" placeholder="    Rating" />
                    </div>
                </div>
                <button className="btn mt-5 mx-auto text-center w-full" type="submit">ADD PRODUCT   </button>
            </form>
        </div>
    );
};

export default Add   ;
