import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './BurgerContent.css';

function BurgerContent() {
  return (
    <div>
      <ul className="nav">
        <li>
          <HashLink className="section" smooth to="#sectionHome">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="section" smooth to="#accueil">
            Cocktails
          </HashLink>
        </li>
        <li>
          <Link className="link" to="/mapbar">
            Find a Bar
          </Link>
        </li>
        <li>
          <HashLink className="section" smooth to="#sectionCréation">
            Creation
          </HashLink>
        </li>
        <li>
          <HashLink className="section" smooth to="#sectionContact">
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
