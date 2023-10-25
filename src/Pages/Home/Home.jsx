import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";


const Home = () => {
  const brandData= useLoaderData()
  console.log(brandData);
  
    return (
        <div>
         
          <Banner></Banner>
          <Brands brandData={brandData}></Brands>
            
        </div>
    );
};

export default Home;