import React from 'react';
// import fleche from '../assets/fleche.png';
import './Arrow.css';

export default function ArrowButton() {
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" className="arrow" onClick={handleScroll}>
      {/* <img src={fleche} alt="" className="arrow-img" /> */}
    </button>
  );
}
