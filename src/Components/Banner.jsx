

const Banner = () => {
  
  return (
    <div
      className='hero min-h-custom'
      style={{
        backgroundImage:
          'url(https://i.ibb.co/JHZLPGR/assignment-10-banner.jpg)',
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1
           
          
          className='mb-5 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-bold'>Find your next car Here</h1>
          <p className='mb-5 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-bold'>
          Bangladesh biggest car showroom.
          </p>
          <button className='btn text-black border-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500  '>VISIT CARs</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
