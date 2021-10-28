import React from 'react';
import './CocktailCard.css';
import axios from 'axios';
// import cocktailImg from '../assets/cocktail-random.jpg';

export default function RandomCocktail() {
  const [random, setRandom] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((resp) => setRandom(resp.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section id="home">
      <h1>Lacking inspiration? Try today&#39;s cocktail : </h1>

      {random.map((rand) => (
        <div className="cocktail-cart">
          <img
            src={rand.strDrinkThumb}
            alt="cocktail"
            className="cocktail-image"
          />

          <ul className="ingredients">
            <li>
              <h2>{rand.strDrink}</h2>
            </li>
            <li>{rand.strAlcoholic}</li>
            <li>{rand.strIngredient1}</li>
            <li>{rand.strIngredient2}</li>
            <li>{rand.strIngredient3}</li>
          </ul>

          <h2>MIX IT</h2>
          <p className="recipe">{rand.strInstructions}</p>
        </div>
      ))}
    </section>
  );
}
