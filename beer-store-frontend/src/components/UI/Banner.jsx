import React, { useState, useEffect } from 'react';

const Banner = () => {  

  const [banner, setBanner] = useState()


  const slides = [
    'https://res.cloudinary.com/dm9glx5a7/image/upload/v1696287020/beerStore/oktober_xskoti.png',
    'https://res.cloudinary.com/dm9glx5a7/image/upload/v1696286736/beerStore/promo_pqbnrl.png',
    'https://res.cloudinary.com/dm9glx5a7/image/upload/v1696287348/beerStore/club_zjczaz.png'
  ]
  //console.log(banner);
  // console.log(slides);

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(nextSlide, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, slides]);

  if (slides.length === 0) {
    
    return <div>No hay banners disponibles.</div>;
  }

   return (
    <div className='max-w h-[240px] w-full relative group bg-black block'>
      {slides.length 
      ? <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full duration-500 bg-center bg-cover'></div>
      : 'No hay banners disponibles'
      }
    </div>
  );
};

export default Banner;
