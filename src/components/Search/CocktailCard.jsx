import React from 'react';
import '../CocktailCard.css';
import axios from 'axios';

export default function CocktailCard(props) {
  const { idDrink } = props;
  const [drinkCard, setDrinkCard] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('www.thecocktaildb.com/api/json/v1/1/lookup.php?i={idDrink}')
      .then((resp) => setDrinkCard(resp.data.drinks[0]))
      .catch((error) => console.log(error));
  }, [idDrink]);

  return (
    <section id="card">
      {drinkCard.map((drink) => (
        <div className="cocktail-cart">
          <img
            src={drink.strDrinkThumb}
            alt="cocktail"
            className="cocktail-image"
          />

          <ul className="ingredients">
            <li>
              <h2>{drink.strDrink.toUpperCase()}</h2>
            </li>
            <li>
              {drink.strIngredient1} {drink.strMeasure1}
            </li>
            <li>
              {drink.strIngredient2} {drink.strMeasure2}
            </li>
            <li>
              {drink.strIngredient3} {drink.strMeasure3}
            </li>
            <li>
              {drink.strIngredient4} {drink.strMeasure4}
            </li>
            <li>
              {drink.strIngredient5} {drink.strMeasure5}
            </li>
            <li>
              {drink.strIngredient6} {drink.strMeasure6}
            </li>
          </ul>

          <h2>MIX IT</h2>
          <p className="recipe">{drink.strInstructions}</p>
        </div>
      ))}
    </section>
  );
}
