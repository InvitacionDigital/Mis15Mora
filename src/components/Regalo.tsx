import React from 'react';
import regaloGif from '/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-black rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans text-primary'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p className=''>Lo que más queremos es compartir con vos nuestro gran día, <br/>pero si deseas regalarme algo<br/>podés hacer clic en el siguiente botón</p>
      <Popup trigger={<button className='mt-6 shadow-black rounded-full p-4'>VER INFORMACIÓN</button>} modal>
        <div className="bg-primary w-fit h-fit p-4 text-left rounded-2xl text-xl font-pop shadow-full z-50 text-white">
          <p className="my-12 text-6xl font-normal text-center font-dance">Mis 15 More</p>
          <p className="my-4">CBU: 0000003100052819377826</p>
          <p className="my-4">Alias: moriif</p>
          
          <p className="my-8 text-center text-sm ">En la entrada vas a poder encontrar un cofre para regalos</p>
        </div>
      </Popup>
    </div>
  );
};

export default Regalo;
