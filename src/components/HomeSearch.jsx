import React from 'react';
import './Home.css';

export default function HomeSearch(props) {
  const { searchValue, handleValue, handleEnter } = props;

  // passe le state recupéré dans la barre de recherche au parent App
  // passe l'évenement qui écoute la touche entrée ds l'input au composant parent App

  return (
    <div className="search">
      <input
        type="text"
        className="search-bar"
        value={searchValue}
        placeholder="  &#x1F50E;   Search by name, ingrédient..."
        onChange={handleValue}
        onKeyUp={handleEnter}
      />
    </div>
  );
}
