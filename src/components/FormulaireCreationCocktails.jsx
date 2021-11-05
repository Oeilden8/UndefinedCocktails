/* eslint-disable no-console */
import React from 'react';
import './formulaireCreationCocktails.css';

// Le Formulaire de Création de Cocktail
function FormulaireCreationCocktails() {
  // Déclaration des Variable pour le fonctionnement du formulaire
  const [name, setName] = React.useState('');
  const [ingredient, setIngredient] = React.useState('');
  const [preparation, setPreparation] = React.useState('');

  // Function qui permet d'afficher dans la console ce qui il y a d'écrit dans les input
  const display = (e) => {
    e.preventDefault();
    console.log(`name of the cocktails:${name}`);
    console.log(`Les ingrédients:${ingredient}`);
    console.log(`La préparation:${preparation}`);
    setName(' ');
    setIngredient(' ');
    setPreparation(' ');
  };
  return (
    <div className="formulaire">
      <form>
        <h1>What about offering your own cocktail?</h1>
        {/* Input pour le Nom du Cocktail */}
        <h3>Name of the Cocktail :</h3>
        <label htmlFor="nameofthecocktail">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of the cocktail"
          />
        </label>
        {/* Input des Ingrédients */}
        <h3>Ingredient :</h3>
        <label htmlFor="nameofthecocktail">
          <input
            type="text"
            id="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Ingredient"
          />
        </label>
        {/* Input Instruction de Préparation */}
        <h3>Preparation :</h3>
        <label htmlFor="nameofthecocktail">
          <textarea
            type="message"
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            placeholder="The preparation of cocktails"
          />
        </label>
        {/* Button Envoyé */}
        <button type="button" onClick={display} className="submitCocktails">
          suggest
        </button>
      </form>
    </div>
  );
}

export default FormulaireCreationCocktails;
