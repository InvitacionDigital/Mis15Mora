import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-xl '>Ruben Dario 3221,<br/>Escobar<br/>Inicio 21:00 hs<br/>Cierre 5:00 hs</p>
      <a href='https://www.google.com/maps/place/Ruben+Dario+3221,+Bel%C3%A9n+de+Escobar,+Provincia+de+Buenos+Aires/@-34.321173,-58.7642522,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb60f4a026f665:0x348f515575971545!8m2!3d-34.3211775!4d-58.7616719!16s%2Fg%2F11h0br7wrk?entry=ttu'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
