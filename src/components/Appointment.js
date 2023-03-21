import React from 'react';

// import image
import ArtImg from '../assets/img/interiordesign.jpg';

const Appointment = () => {
  return (
    <section className='bg-white py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]'>
      <div className='container mx-auto'>
        <div className='lg:absolute lg:-top-32 lg:left-0 lg:right-0'>
          {/* image */}
          
          <div className=' w-full max-w-[700px] mx-auto pb-10 lg:flex justify-center'>
            <img src={ArtImg} alt='' />
          </div>

          {/* form */}
          <form className='bg-yellow w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Get an appointment</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Full name'
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email address'
            />
            <input
              className='input-control'
              type='text'
              placeholder='Phone number'
            />
            <button className='btn w-full max-w-[514px]'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

//<div className='hidden w-full max-w-[700px] mx-auto lg:flex justify-center'>
