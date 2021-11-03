// import RemoveMe from './components/RemoveMe';
// import ReactDOM from 'react-dom';
import React from 'react';
// import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import HomeSearch from './components/HomeSearch';
// import BurgerMenu from './components/BurgerMenu';

function App() {
  return (
    // <Router>
    <div className="App">
      <BurgerMenu />
      {/* <BurgerMenu /> */}
      <HomeSearch />
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
