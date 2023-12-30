import React from 'react';
import queNosPonemos from '/quenosponemos.png';
import trajeGif from '/trajeGif.gif';

const DressCode = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-8 py-12 font-sans shadow-black mt-12 text-center text-primary'>
      <h2 className="font-semibold text-6xl text-center mb-2 font-dance ">¿Qué nos ponemos?</h2>
      <img src={trajeGif} alt="trajeGif" className='w-[120px]' />
      <p className='text-xl'>Dresscode:<br/><span className='font-semibold'>Elegante Sport</span></p>
    </div>
  );
};

export default DressCode;
