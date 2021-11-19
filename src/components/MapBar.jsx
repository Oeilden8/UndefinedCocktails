import React, { useState } from 'react';
import './MapBar.css';

function MapBar() {
  const [mapBar, setMapBar] = useState('');
  const handleMapBar = (event) => {
    setMapBar(event.target.value);
  };
  const urlSearch = `https://www.google.com/maps/embed/v1/search?key=AIzaSyAI78nOfLNuKORIctvLjdEQhd17OZvMkN8&q=bar+cocktail+near+${mapBar}`;
  return (
    <div className="map-bar">
      <h1>Are you looking for a Bar?</h1>
      <input
        className="map-search"
        type="text"
        placeholder="Where are you ?"
        value={mapBar}
        onChange={handleMapBar}
      />
      <iframe
        className="map"
        title="barmap"
        loading="lazy"
        allowFullScreen
        src={urlSearch}
      />
    </div>
  );
}

export default MapBar;
