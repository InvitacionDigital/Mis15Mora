import React from 'react';
import inolvidable from '/queseainolvidable.png';
import fotosGif from '/fotosGif.gif';
import foto3 from '/foto3.jpeg';
import Slider from './Slider';

const Inolvidable: React.FC = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-8 pb-8 pt-12 font-sans shadow-black mt-12 text-center'>
      <h2 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">¡Que sea inolvidable!</h2>
      <img src={fotosGif} alt="fotosGif" className='w-[120px]' />
      <Slider />
    </div>
  );
};

export default Inolvidable;
