import React, { useState } from 'react';
import './BurgerMenu.css';
import BurgerContent2 from './BurgerContent2';

const BurgerMenu2 = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header id="home" className={`${open ? 'is-open' : ''}  `}>
      <button type="button" onClick={handleClick} className="burger-menu">
        <span />
        <span />
        <span />
      </button>
      {open ? <BurgerContent2 /> : null}
      <div className="title">Undefined Cocktails</div>
    </header>
  );
};

export default BurgerMenu2;
