import React from 'react';
import './formulaireCreationCocktails.css';

function FormulaireCreationCocktails() {
  return (
    <div className="formulaire">
      <form>
        <h1>What about offering your own cocktail?</h1>
        <h3>Name of the Cocktail :</h3>
        <label htmlFor="nameofthecocktail">
          <input type="text" id="name" placeholder="Name of the cocktail" />
        </label>
        <h3>Ingredient :</h3>
        <label htmlFor="nameofthecocktail">
          <input type="text" id="ingredient" placeholder="Ingredient" />
        </label>
        <h3>Preparation :</h3>
        <label htmlFor="nameofthecocktail">
          <textarea
            type="message"
            id="preparation"
            placeholder="The preparation of cocktails"
          />
        </label>
        <button type="submit" className="submitCocktails">
          suggest
        </button>
      </form>
    </div>
  );
}

export default FormulaireCreationCocktails;
