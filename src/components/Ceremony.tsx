import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-xl '>Ruben Dario 3221,<br/>Escobar<br/>Inicio 21:00 hs<br/>Cierre 5:00 hs</p>
      <a href='https://maps.apple.com/place?address=Rub%C3%A9n%20Dar%C3%ADo%203221,%20B1636%20Escobar,%20Provincia%20de%20Buenos%20Aires,%20Argentina&ll=-34.321169,-58.761671&q=Rub%C3%A9n%20Dar%C3%ADo%203221&t=h'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
