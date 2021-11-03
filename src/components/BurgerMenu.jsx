import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <header id="home">
      <button type="button" className="burger__menu">
        <span />
        <span />
        <span />
        <ul className="nav">
          <li>Home</li>
          <li>Cocktails</li>
          <li>Trouver un Bar</li>
          <li>Création</li>
          <li>Contact</li>
        </ul>
      </button>
      <div className="title">
        <h1>Undefined Cocktails</h1>
      </div>
    </header>
  );
};

export default BurgerMenu;
