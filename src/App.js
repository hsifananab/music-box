import React from 'react';
import Intro from './components/Intro';
import MobileApp from './components/MobileApp';
import Navbar from './components/Navbar';
import News from './components/News';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Pricing />
      <News />
      <MobileApp />
    </>
  );
};

export default App;
