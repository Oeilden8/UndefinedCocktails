import React, { useState, useEffect } from 'react';
import './CocktailCard.css';
import axios from 'axios';
// import cocktailImg from '../assets/cocktail-random.jpg';

export default function RandomCocktail() {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((resp) => {
        console.log(resp.data.drinks);
        return setRandom([resp.data.drinks[0]]);
      })
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
