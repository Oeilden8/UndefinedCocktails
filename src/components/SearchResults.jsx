import React from 'react';
import './Home.css';
import axios from 'axios';
import HomeSearch from './HomeSearch';

export default function SearchResults() {
  const [searchValue, setSearchValue] = React.useState('rhum');
  const handleValue = (e) => {
    setSearchValue(e.target.value);
  };

  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    // ou appeler Homesearch?
    <HomeSearch handleValue={handleValue} searchValue={searchValue} />;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`
      )
      .then((resp) => {
        console.log(resp.data.drinks);
        return setResult([resp.data.drinks[0]]);
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  // searchValue est la query demandée à l'api

  return (
    <div className="cocktail-cart">
      {result.map((search) => (
        <img
          src={search.strDrinkThumb}
          alt="cocktail"
          className="cocktail-image"
        />
      ))}
    </div>
  );
}
