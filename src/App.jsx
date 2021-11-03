// import RemoveMe from './components/RemoveMe';
// import ReactDOM from 'react-dom';
import React from 'react';
// import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomeSearch from './components/HomeSearch';
import BurgerMenu from './components/BurgerMenu';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/SearchResults';

function App() {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log('it works');
      <SearchResults />;
    } else {
      <RandomCocktail />;
    }
  };

  return (
    // <Router>
    <div className="App">
      <BurgerMenu />
      <HomeSearch />
      {handleEnter}
    </div>
    //   <Switch>
    //     <Route exact path="/">
    //       <App />
    //     </Route>
    //     <Route path="/Bar">
    //       <NomComposantBar />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
