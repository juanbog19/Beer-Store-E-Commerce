import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosURL from "../../tools/axiosInstance";


const Banner = ({data}) => {  



 //console.log('log de banner',data);

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(nextSlide, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, data]);

  if (data.length === 0) {
    
    return <div>No hay banners disponibles.</div>;
  }

   return (
    <div className='max-w h-[240px] w-full relative group bg-black block'>
      {data.length 
      ? <div style={{ backgroundImage: `url(${data[currentIndex].img.url})` }} className='w-full h-full duration-500 bg-center bg-cover'></div>
      : 'No hay banners disponibles'
      }
    </div>
  );
};

export default Banner;
