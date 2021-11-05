import React from 'react';
import './SearchResults.css';
import axios from 'axios';

export default function SearchResults({ searchValue }) {
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`
      )
      .then((resp) => {
        if (resp.data.drinks) {
          const randomDrinksResult = [];
          const allDrinks = resp.data.drinks;
          for (let i = 0; i < 12; i++) {
            const randomDrink =
              allDrinks[Math.floor(Math.random() * allDrinks.length)];
            randomDrinksResult.push(randomDrink);
            // allDrinks.splice(0, Math.floor(Math.random() * allDrinks.length));
          }
          console.log(randomDrinksResult);
          setResult(randomDrinksResult);
        } else {
          alert('Please enter a valid ingredient');
        }
        // si l'api envoie une réponse, stocke dans result
        // else envoyer un message d'erreur à user
        // dans le if (=si on a bien un resultat) faire un tableau vide randomDrinksResult, une boucle qui splice un resultat et le push dans randomDrinksResult 12  (mobi?)

        // return setResult(resp.data.drinks[Math.floor(Math.random() * 12)]);
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  // searchValue est la query demandée à l'api

  return (
    <div className="search-container">
      <h1>Here is a cocktail selection mixed with {searchValue}</h1>
      <div className="grid-search">
        {result.map((search, index) => (
          <section className="hover" id={index.toString()}>
            <img
              src={search.strDrinkThumb}
              alt="cocktail"
              className="result-image"
            />
            <h4>{search.strDrink.toUpperCase()}</h4>
          </section>
        ))}
        <button type="button" className="search-button">
          Click here if you want more results
        </button>
      </div>
      <div className="grid-search-mobi">
        {result.slice(-6).map((search, index) => (
          <section id={index.toString()}>
            <img
              src={search.strDrinkThumb}
              alt="cocktail"
              className="result-image"
            />
            <h4>{search.strDrink.toUpperCase()}</h4>
          </section>
        ))}
        <button type="button" className="search-button">
          Click here if you want more results
        </button>
      </div>
    </div>
  );
}
