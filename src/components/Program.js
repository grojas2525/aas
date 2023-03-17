import React from 'react';

// import icons
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img
          className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
          src={PhoneIcon}
          alt=''
        />
        <div className='lg:text-[23px] text-blue font-extrabold'>
          + 1(615) 549-6387
        </div>
      </div>
      <div className='text-sm'>
        <div className='hidden lg:flex'>
          Hours: Mon - Sun: 8am - 6pm or by appointment
        </div>
        <div className='lg:hidden text-right'>Mon - Sun: 6am - 6pm </div>
        <div className='lg:hidden text-right'>or by appointment </div>
      </div>
    </div>
  );
};

export default Program;