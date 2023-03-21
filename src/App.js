import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import Appointment from './components/Appointment';
//import Prices from './components/Prices';
//import Bundles from './components/Bundles';


const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white relative'>
      <Header />
      <Hero />
      <Appointment />
     

    </div>
  );
};

export default App;

