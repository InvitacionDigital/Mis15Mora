import React from 'react';
import regaloGif from '/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans bg-primary text-white'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p>Acompañame en mi gran día, pero…<br/>¡No te olvides de mi regalo! <br/>En el salón te espera un cofre o <br/>hace clic en el siguiente botón</p>
      <Popup trigger={<button className='mt-6 shadow-4xl font-bold rounded-full p-4'>VER INFORMACIÓN</button>} modal>
        <div className="bg-primary w-fit h-fit p-4 text-left rounded-2xl text-xl font-pop shadow-full z-50 text-white">
        <p className="my-6 text-6xl font-normal text-center font-dance">Mis 15 Mora</p>
          <img src={regaloGif} alt="anillogif" className='w-[120px] mx-auto mb-10' />
          
          <p className="my-4">CBU: 0000003100052819377826</p>
          <p className="my-4 mb-8">Alias: moriif</p> 
        </div>
      </Popup>
    </div>
  );
};

export default Regalo;
