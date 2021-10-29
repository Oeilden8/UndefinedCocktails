import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <header>
      <button type="button">Burger Menu</button>
      <h1>Undefined Cocktails</h1>
      <ul className="menu">
        <li>Home</li>
        <li>Cocktails</li>
        <li>Trouver un Bar</li>
        <li>Création</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default BurgerMenu;
