import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerContent.css';

function BurgerContent() {
  return (
    <div>
      <ul className="nav">
        <li>
          <a className="section" href="#sectionHome">
            Home
          </a>
        </li>
        <li>
          <a className="section" href="#accueil">
            Cocktails
          </a>
        </li>
        <li>
          <Link to="/mapbar">Trouver un Bar</Link>
        </li>
        <li>
          <a className="section" href="#sectionCréation">
            Création
          </a>
        </li>
        <li>
          <a className="section" href="#sectionContact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
