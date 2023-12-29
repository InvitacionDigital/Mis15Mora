import React from 'react';
import sigaText from '/siga.png';
import microGif from '/microGif.gif';

const Canciones: React.FC = () => {
  return (
    <div className='w-[85%] shadow-black rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans mt-12'>
      <img src={sigaText} alt="ceremonia" className='w-[80%]' />
      <img src={microGif} alt="microGif" className='w-[80px]' />
      <p className='text-lg '>Que tu tema favorito no deje de sonar en nuestra fiesta.<br/>¡Ayudanos a armar la lista! <br/>¡Sumate haciendo clic!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSewT9jmWDEBRthIxgGxQTb8m_CWMNUHGE6rRVjQMNOe6uZLKw/viewform?usp=sf_link'
        target='_blank'
        className='mt-6 shadow-black rounded-full p-4'>AÑADÍ TU TEMA</a>
    </div>
  );
};

export default Canciones;