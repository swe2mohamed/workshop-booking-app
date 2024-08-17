import React from 'react';
import './WaveBackground.css'; // Ensure the correct path

const WaveBackground = () => {
  return (
    <div className="svg-background">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="#" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#ffffff">
        <defs>
          <path id="wavepath" d="M 0 2000 0 500 Q 148.5 390 297 500 t 297 0 297 0 297 0 297 0 297 0  v1000 z" />
          <path id="motionpath" d="M -594 0 0 0" />
        </defs>
        <g>
          <use xlinkHref="#wavepath" y="256" fill="#29B6F6">
            <animateMotion
              dur="5s"
              repeatCount="indefinite">
              <mpath xlinkHref="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </div>
  );
};

export default WaveBackground;
