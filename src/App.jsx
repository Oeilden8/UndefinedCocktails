// import RemoveMe from './components/RemoveMe';
// import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import FormulaireContact from './components/FormulaireContact';
import FormulaireCreationCocktails from './components/FormulaireCreationCocktails';
import BurgerMenu from './components/BurgerMenu';
import HomeSearch from './components/HomeSearch';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/Search/SearchResults';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // state de la barre de recherche de l'enfant HomeSearch
  const [enter, setEnter] = React.useState(false);
  // state lançant la recherche via enter (enter est pressé = true, par default false)
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  // liste des suggestions affichée ou non
  const handleValue = (e) => {
    setSearchValue(e.target.value);
    setEnter(false);
    // (onChange ds l'input de l'enfant Homesearch) on remplit searchValue quand l'input change
    // à chaque fois qu'on ecrit dans l'input enter=false
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setEnter(true);
      setShowSuggestions(false);
      console.log(searchValue);
      // si on appuie sur enter, enter=true et la recherche est lancée, le composant SearchResults mount, l'api est appelée
      // else le composant ne se monte pas
    }
  };

  return (
    <div className="App">
      <BurgerMenu />
      <HomeSearch
        handleValue={handleValue}
        searchValue={searchValue}
        handleEnter={handleEnter}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
      {searchValue && enter ? (
        <SearchResults searchValue={searchValue} />
      ) : (
        <RandomCocktail />
        // si searchValue est true (elle existe) et enter est true mount SearchResulst
        // else mount RandomCocktail
      )}
      <FormulaireCreationCocktails />
      <FormulaireContact />
    </div>
  );
}

export default App;
