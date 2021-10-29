import React from 'react';
import './formulaireCreationCocktails.css';

function FormulaireCreationCocktails() {
  return (
    <div>
      <form>
        <label htmlFor="nameofthecocktail">
          Name of the Cocktail :{' '}
          <input type="text" id="name" placeholder="Name of the cocktail" />
        </label>
        <label htmlFor="nameofthecocktail">
          Ingredient :{' '}
          <input type="text" id="ingredient" placeholder="Ingredient" />
        </label>
        <label htmlFor="nameofthecocktail">
          Preparation :{' '}
          <textarea
            type="message"
            id="preparation"
            placeholder="The preparation of cocktails"
          />
        </label>
      </form>
      <button type="submit" className="submitCocktails">
        suggest
      </button>
    </div>
  );
}

export default FormulaireCreationCocktails;
