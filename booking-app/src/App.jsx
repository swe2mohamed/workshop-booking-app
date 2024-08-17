import React from 'react';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import Main from './Home/Main';

const App = () => {
  return (
    <div id="root">
      <Navbar />
      <Main /> 
      <Footer />
    </div>
  );
};

export default App;
