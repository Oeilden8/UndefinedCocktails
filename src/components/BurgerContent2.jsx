import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerContent.css';

function BurgerContent2() {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent2;
