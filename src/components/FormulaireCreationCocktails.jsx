/* eslint-disable no-console */
import React from 'react';
import './formulaireCreationCocktails.css';

// Le Formulaire de Création de Cocktail
function FormulaireCreationCocktails() {
  // Déclaration des Variable pour le fonctionnement du formulaire
  const [name, setName] = React.useState('');
  const [ingredient, setIngredient] = React.useState('');
  const [preparation, setPreparation] = React.useState('');
  const cocktailName = [];
  const cocktailIngredient = [];
  const cocktailPreparation = [];
  // Function qui permet d'afficher dans la console ce qui il y a d'écrit dans les input
  const display = (e) => {
    e.preventDefault();
    // Les 3 console.log suivant servent a afficher ce qu'il y a dans les inputs dans la console
    // console.log(`name of the cocktails:${name}`);
    // console.log(`Les ingrédients:${ingredient}`);
    // console.log(`La préparation:${preparation}`);

    // Les valeurs des input sont enregistré dans le tableau correspondant.
    cocktailName.push(`${name}`);
    cocktailIngredient.push(`${ingredient}`);
    cocktailPreparation.push(`${preparation}`);

    // les console.log des tableaux
    console.log(`Le nom de votre cocktail : ${cocktailName}`);
    console.log(`Les ingrédients de votre cocktail : ${cocktailIngredient}`);
    console.log(`La préparation de votre cocktail : ${cocktailPreparation}`);

    // sert a afficher les tableaux dans la page
    // document.getElementById('cocktailNom').innerHTML = cocktailName.join();
    // document.getElementById('cocktailIng').innerHTML =
    //   cocktailIngredient.join();
    // document.getElementById('cocktailPrepa').innerHTML =
    //   cocktailPreparation.join();
    setName(' ');
    setIngredient(' ');
    setPreparation(' ');
  };
  return (
    <div className="formulaire" id="sectionCréation">
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
        <button type="submit" onClick={display} className="submitCocktails">
          suggest
        </button>
        {/* Partie qui affiche les cocktails du formulaire */}
        {/* <p>Mes cocktails Personnalisé</p>
        <div id="cocktailTabs">
          <p id="cocktailNom">Name</p>
          <p id="cocktailIng">Ingredient</p>
          <p id="cocktailPrepa">Preparation</p>
        </div> */}
      </form>
    </div>
  );
}

export default FormulaireCreationCocktails;
