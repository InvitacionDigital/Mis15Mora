import React from 'react';
import sigaText from '/siga.png';
import microGif from '/microGif.gif';

const Canciones: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans mt-12 text-primary'>
      <h2 className="font-semibold text-5xl text-center mb-2 font-dance ">¡Siga el baile,</h2>
      <h2 className="font-semibold text-5xl text-center mb-2 font-dance ">Siga el baile!</h2>
      <img src={microGif} alt="microGif" className='w-[80px]' />
      <p className='text-lg '>Que tu tema favorito no deje de sonar en nuestra fiesta.<br/>¡Ayudanos a armar la lista! <br/>¡Sumate haciendo clic!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSemgh9jE1_7JekO6QVXF_JRLy0FT-k8ibMeTK8q3TM5Ng3AoA/viewform?usp=sf_link'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>AÑADÍ TU TEMA</a>
    </div>
  );
};

export default Canciones;