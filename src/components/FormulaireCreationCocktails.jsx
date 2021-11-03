import React from 'react';
import './formulaireCreationCocktails.css';

// Le Formulaire de Création de Cocktail
function FormulaireCreationCocktails() {
  return (
    <div className="formulaire">
      <form>
        <h1>What about offering your own cocktail?</h1>
        {/* Input pour le Nom du Cocktail */}
        <h3>Name of the Cocktail :</h3>
        <label htmlFor="nameofthecocktail">
          <input type="text" id="name" placeholder="Name of the cocktail" />
        </label>
        {/* Input des Ingrédients */}
        <h3>Ingredient :</h3>
        <label htmlFor="nameofthecocktail">
          <input type="text" id="ingredient" placeholder="Ingredient" />
        </label>
        {/* Input Instruction de Préparation */}
        <h3>Preparation :</h3>
        <label htmlFor="nameofthecocktail">
          <textarea
            type="message"
            id="preparation"
            placeholder="The preparation of cocktails"
          />
        </label>
        {/* Button Envoyé */}
        <button type="submit" className="submitCocktails">
          suggest
        </button>
      </form>
    </div>
  );
}

export default FormulaireCreationCocktails;
