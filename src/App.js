import React from 'react';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
};

export default App;
