import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerContent.css';

function BurgerContent() {
  return (
    <div>
      <ul className="nav">
        <li>
          <a className="section" Link to="homepage#sectionHome">
            Home
          </a>
        </li>
        <li>
          <a className="section" a href="#accueil">
            Cocktails
          </a>
        </li>
        <li>
          <Link className="link" to="/mapbar">
            Find a Bar
          </Link>
        </li>
        <li>
          <a className="section" Link to="homepage#sectionCréation">
            Creation
          </a>
        </li>
        <li>
          <a className="section" Link to="homepage#sectionContact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
