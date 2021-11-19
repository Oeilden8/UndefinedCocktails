import React from 'react';
import './footer.css';
import imgGeo from '../assets/button-map.png';

function Footer() {
  return (
    <footer>
      <p className="textAlcool">
        Excessive drinking is dangerous for your health; alcoholic beverages
        should be consumed with moderation.
      </p>
      <div className="containerGeo">
        <p className="textGeo">Feeling lazy? Why not go to a nearby bar? </p>
        <a href="https://www.google.fr/maps/search/bar/@48.4675239,1.0156517,14.76z?hl=fr&authuser=0">
          <img src={imgGeo} alt="marqueur" className="geoImgLogo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
