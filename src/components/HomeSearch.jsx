import axios from 'axios';
import React from 'react';
import './Home.css';

export default function HomeSearch(props) {
  const {
    searchValue,
    handleValue,
    handleEnter,
    showSuggestions,
    setShowSuggestions,
  } = props;
  // passe le state recupéré dans la barre de recherche au parent App
  // passe l'évenement qui écoute la touche entrée ds l'input au composant parent App

  const [suggestions, setSuggestion] = React.useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  // const [suggestionsIndex, setSuggestionsIndex] = React.useState(0); | pas compris a quoi ca sert?

  React.useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((resp) => {
        const suggArray = [];
        for (let i = 0; i < resp.data.drinks.length; i++) {
          suggArray.push(resp.data.drinks[i].strIngredient1);
        }
        setSuggestion(suggArray);
      })
      // la réponse est un tableau de max 100 objets strIngredient1=ingrédient,
      // pour récupérer seulement l'ingrédient j'ai fait une boucle
      .catch((error) => console.log(error));
  }, []);

  const handleSuggestion = () => {
    console.log(suggestions);
    const suggestionList = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(searchValue) > -1
      // indexOf compare searchValue au contenu du tableau suggestions
    );
    setFilteredSuggestions(suggestionList);
    // envoie la liste des suggestions filtrées par rapport a searchvalue dans le state filteredSuggestions
    // setSuggestionsIndex(0);
    setShowSuggestions(true);
    // fait apparaitre la liste des suggestions
  };

  const SuggestionsList = () => {
    return (
      <ul className="suggestion">
        {filteredSuggestions.map((suggestion) => (
          <li>{suggestion}</li>
        ))}
      </ul>
    );
  };
  // liste des ingrédients suggérés

  return (
    <div className="search" id="sectionHome">
      <input
        type="text"
        className="search-bar"
        value={searchValue}
        placeholder="  &#x1F50E;   Search by ingredient and press Enter"
        onChange={handleValue}
        onKeyUp={handleEnter}
        onKeyDown={handleSuggestion}
      />
      {showSuggestions && searchValue && <SuggestionsList />}
      {/* si showSuggestion est true, qu'on a un input (=searchValue) on appelle la liste */}
    </div>
  );
}
