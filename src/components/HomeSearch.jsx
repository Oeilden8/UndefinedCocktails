import React from 'react';
import './Home.css';

export default function HomeSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  const inputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(searchValue);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-bar"
        value={searchValue}
        placeholder="  &#x1F50E;   Search by name, ingrédient..."
        onChange={inputValue}
        onKeyUp={handleEnter}
      />
    </div>
  );
}
