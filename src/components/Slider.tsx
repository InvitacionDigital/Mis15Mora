import React from 'react';
import { Carousel } from 'flowbite-react';
import foto1 from '/foto1.jpeg';
import foto2 from '/foto2.jpeg';
import foto3 from '/foto3.jpeg';

const Slider = () => {
  return (
    <div className="h-[300px] w-full">
      <Carousel leftControl="." rightControl="." slideInterval={1500}>
        <div className='w-[85%] rounded-lg'>
          <img src={foto3} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto2} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto1} alt="..." className=' w-full max-h-[375px] rounded-lg ' />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
