import React from 'react';
import '../CocktailCard.css';
import axios from 'axios';

export default function CocktailCard({ idCocktail, handleCocktail }) {
  const [drinkCard, setDrinkCard] = React.useState();
  console.log(`idDrink passée ${idCocktail}`);

  React.useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`
      )
      .then((resp) => {
        setDrinkCard(resp.data.drinks[0]);
      })
      .catch((error) => console.log(error));
  }, [idCocktail]);

  return (
    <section
      id="card"
      role="button"
      tabIndex={0}
      onKeyDown={handleCocktail}
      onClick={handleCocktail}
    >
      {drinkCard && (
        <div className="cocktail-cart">
          <img
            src={drinkCard.strDrinkThumb}
            alt="cocktail"
            className="cocktail-image"
          />

          <ul className="ingredients">
            <li>
              <h2>{drinkCard.strDrink.toUpperCase()}</h2>
            </li>
            <li>
              {drinkCard.strIngredient1} {drinkCard.strMeasure1}
            </li>
            <li>
              {drinkCard.strIngredient2} {drinkCard.strMeasure2}
            </li>
            <li>
              {drinkCard.strIngredient3} {drinkCard.strMeasure3}
            </li>
            <li>
              {drinkCard.strIngredient4} {drinkCard.strMeasure4}
            </li>
            <li>
              {drinkCard.strIngredient5} {drinkCard.strMeasure5}
            </li>
            <li>
              {drinkCard.strIngredient6} {drinkCard.strMeasure6}
            </li>
          </ul>

          <h2>MIX IT</h2>
          <p className="recipe">{drinkCard.strInstructions}</p>
        </div>
      )}
    </section>
  );
}
