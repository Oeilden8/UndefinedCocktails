// import RemoveMe from './components/RemoveMe';
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import FormulaireContact from './components/FormulaireContact';
import FormulaireCreationCocktails from './components/FormulaireCreationCocktails';

function App() {
  return (
    <div className="App">
      <FormulaireCreationCocktails />
      <FormulaireContact />
    </div>
  );
}

export default App;
