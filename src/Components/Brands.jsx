/* eslint-disable react/prop-types */
import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Brands.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Brands = ({brandData}) => {
    console.log(brandData);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const handleBrand =()=>{

    }
      
      
  return (
    <div className='my-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
            brandData.map(brand=>   <SwiperSlide  key={brand._id}><div>
            <img className='h-[350px] md:h-[500px] lg:h-[600px] w-screen' src={brand.brand_img} alt="" />
            <h1 className='text-center text-3xl py-1 font-bold'>{brand.brand_name}</h1>
            <Link to={`/product/${brand.brand_name}`}><button onClick={handleBrand} className='bg-gradient-to-r from-fuchsia-700 to-pink-600 rounded-xl hover:text-blue-800 px-2 p-1'>Show {brand.brand_name} Car</button></Link> 
            </div></SwiperSlide>  )
        }
      
       
     <div className='py-6 bg-white'>
         <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
     </div>
       
      </Swiper>
    </div>
  );
};

export default Brands;
