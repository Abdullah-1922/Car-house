import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";
import HappyClientSection from "../../Components/HappyClientSection";
import AboutUsSection from "../../Components/AboutUs";


const Home = () => {
  const brandData= useLoaderData()
  console.log(brandData);
  
    return (
        <div>
         
          <Banner></Banner>
          <Brands brandData={brandData}></Brands>
          <HappyClientSection></HappyClientSection>
          <AboutUsSection></AboutUsSection>
        </div>
    );
};

export default Home;