// import RemoveMe from './components/RemoveMe';
// import ReactDOM from 'react-dom';
import React from 'react';
// import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import './App.css';
import HomeSearch from './components/HomeSearch';
import BurgerMenu from './components/BurgerMenu';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/SearchResults';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // state de la barre de recherche de l'enfant HomeSearch
  const [enter, setEnter] = React.useState(false);
  // state lançant la recherche via enter (enter est pressé = true, par default false)
  const handleValue = (e) => {
    setSearchValue(e.target.value);
    setEnter(false);
    // (onChange ds l'input de l'enfant Homesearch) on remplit searchValue quand l'input change
    // à chaque fois qu'on ecrit dans l'input enter=false
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setEnter(true);
      console.log(searchValue);
      // si on appuie sur enter, enter=true et la recherche est lancée, le composant SearchResults mount, l'api est appelée
      // else le composant ne se monte pas
    }
  };

  return (
    // <Router>
    <div className="App">
      <BurgerMenu />
      <HomeSearch
        handleValue={handleValue}
        searchValue={searchValue}
        handleEnter={handleEnter}
      />
      {searchValue && enter ? (
        <SearchResults searchValue={searchValue} />
      ) : (
        <RandomCocktail />
      )}
      <RandomCocktail />
    </div>
    //   si searchValue est true (elle existe) et enter est true mount SearchResulst
    // else mount
    //   <Routes>
    //     <Route exact path="/">
    //       <App />
    //     </Route>
    //     <Route path="/Bar">
    //       <NomComposantBar />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
