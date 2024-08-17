import React from 'react';
import './Main.css';
import WaveBackground from './WaveBackground'; 
import ToggleButton from './ToggleButton';

const Main = () => {
  return (
    <div className="main-content">
      <WaveBackground /> 
      <div className="toggle-button-container">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Main;
