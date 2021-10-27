// import RemoveMe from './components/RemoveMe';
// import ReactDOM from 'react-dom';
import React from 'react';
// import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomeSearch from './components/HomeSearch';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <App />
    //     </Route>
    //     <Route path="/Bar">
    //       <NomComposantBar />
    //     </Route>
    //   </Switch>
    <div className="App">
      <HomeSearch />
    </div>
    // </Router>
  );
}

export default App;
