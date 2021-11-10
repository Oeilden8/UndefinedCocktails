import React from 'react';
import './footer.css';
import imgGeo from '../assets/button-map.png';

function Footer() {
  return (
    <footer>
      <p className="textAlcool">Alcohol abuse is dangerous for your health</p>
      <div className="containerGeo">
        <p className="textGeo">Lazy? What if you go to the bar? </p>
        <a href="https://www.google.fr/maps/search/bar/@48.4675239,1.0156517,14.76z?hl=fr&authuser=0">
          <img src={imgGeo} alt="marqueur" className="geoImgLogo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
