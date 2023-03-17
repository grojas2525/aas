import React, { useState } from 'react';
import { bundleData } from '../data';
import Bundles from './Bundles';

const Prices = () => {
  //index state
  const [index, setIndex] = useState(0);
  return (
   <section className='py-12 lg:py-24'>
    <div className='container mx-auto'>
      {/*text*/}
      <div className='text-center mb-20'>
        <div className='text font-semibold mb-3'>Pricing</div> 
        <h2 className='h2 mb-3'>Artwork Sizing</h2>
        <p classname='text-lg text-blue'>Choose your services</p>
      </div>
      {/*grid*/}
      <div className='grid grid-cols-4 gap-4 lg:gap-[30px]'>
        {bundleData.map((item, idx) => {
          const {name, image, dogCategory} = item;
          return (
            <div className='cursor-pointer text-center'>
              {/*image*/}
              <div className='mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'>
                <img className='w-full' src={image.type} alt='' />
              </div>
              <h3 className='lg:text-2xl capitalize font-semibold text-blue lg:mb-2'>{name}</h3>
              {/*category text */}
              <div className={`${index === idx ? 'border b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:lg:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative' 
              : 'border-b-4 border-transparent'} pb-4 mb-12`}>
                <div className='hidden lg:block capitalize'>{dogCategory}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  );
};

export default Prices;
