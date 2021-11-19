import React from 'react';
import './SearchResults.css';
import axios from 'axios';
import CocktailCard from './CocktailCard';

export default function SearchResults({ searchValue }) {
  const [result, setResult] = React.useState([]);

  // state changé par le bouton qui permet de re-render le useEffect
  const [refresh, setRefresh] = React.useState(true);
  const handleClick = () => {
    setRefresh(!refresh);
  };

  const [idCocktail, setIdCocktail] = React.useState('');

  // state affichant ou non CocktailCard
  const [cardOpen, setCardOpen] = React.useState(false);
  const handleCocktail = () => {
    setCardOpen(!cardOpen);
  };

  React.useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`
      )
      .then((resp) => {
        // si l'api envoie une réponse, stocke dans result
        if (resp.data.drinks) {
          const randomDrinksResult = [];
          const allDrinks = resp.data.drinks;
          for (let i = 0; allDrinks.length > 0 && i < 12; i++) {
            const randomDrink = allDrinks.splice(
              Math.floor(Math.random() * allDrinks.length),
              1
            )[0];
            randomDrinksResult.push(randomDrink);
            // coupe un drink random de allDrinks et le stocke dans randomDrink, [0] pour renvoyer seulement des objets à pousser dans le tableau results
            // 1 a la fin du splice pour dire "supprimer 1 élément"
          }
          console.log(randomDrinksResult);
          setResult(randomDrinksResult);
        } else {
          alert('Please enter a valid ingredient');
        }
        // else envoyer un message d'erreur à user
      })

      .catch((error) => console.log(error));
  }, [searchValue, refresh]);
  // valeurs qui si modifiées re-render le useEffect
  // searchValue est la query demandée à l'api, refresh le state bidon qui sert juste a controler le re-render

  return (
    <div className="search-container">
      <h1>Here is a cocktail selection mixed with {searchValue}</h1>
      <div className="grid-search">
        {cardOpen ? (
          <CocktailCard
            idCocktail={idCocktail}
            handleCocktail={handleCocktail}
          />
        ) : null}
        {result.map((search, index) => (
          <section
            className="hover"
            id={index.toString()}
            onClick={() => {
              setIdCocktail(search.idDrink.toString());
              console.log(`idDrink recupérée ${idCocktail}`);
              handleCocktail();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={handleCocktail}
          >
            <img
              src={search.strDrinkThumb}
              alt="cocktail"
              className="result-image"
            />
            <h4>{search.strDrink.toUpperCase()}</h4>
            {/* affiche la Card si CardOpen=true et passe la props idDrink à CocktailCard */}
          </section>
        ))}

        <button type="button" className="search-button" onClick={handleClick}>
          Click here if you want more results
        </button>
      </div>
      <div className="grid-search-mobi">
        {cardOpen ? (
          <CocktailCard
            idCocktail={idCocktail}
            handleCocktail={handleCocktail}
          />
        ) : null}
        {result.slice(-6).map((search, index) => (
          <section
            className="hover"
            id={index.toString()}
            onClick={() => {
              setIdCocktail(search.idDrink.toString());
              console.log(`idDrink recupérée ${idCocktail}`);
              handleCocktail();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={handleCocktail}
          >
            <img
              src={search.strDrinkThumb}
              alt="cocktail"
              className="result-image"
            />
            <h4>{search.strDrink.toUpperCase()}</h4>
          </section>
        ))}
        <button type="button" className="search-button" onClick={handleClick}>
          Click here if you want more results
        </button>
      </div>
    </div>
  );
}
