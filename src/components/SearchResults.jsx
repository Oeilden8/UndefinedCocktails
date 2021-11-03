import React from 'react';
import './Home.css';
import axios from 'axios';

export default function SearchResults({ searchValue }) {
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`
      )
      .then((resp) => {
        console.log(resp.data.drinks);
        if (resp.data.drinks) {
          setResult(resp.data.drinks);
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
    <div className="cocktail-cart">
      {result.map((search) => (
        <h1>{search.strDrink}</h1>
      ))}
    </div>
  );
}
