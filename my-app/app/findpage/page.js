"use client"
import React, { useState } from 'react'; 
import Data from '../data'; 

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredData = Data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <>
      <div className='search-box-container'>
        <p className='search-box-instruction'>Enter a school to search.</p>

        <input
          type="text"
          placeholder="Search"
          className="search-box-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-box-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="results-box-container">
        {showResults ? (
          filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="result-card-item">
                <img src={item.image} alt={item.title} className="result-card-image" />
                <h2 className="result-card-title">{item.title}</h2>
                <p className="result-card-detail">City: {item.city}</p>
                <p className="result-card-detail">Place: {item.place}</p>
                <p className="result-card-detail">Rating: {item.rating}</p>
              </div>
            ))
          ) : (
            <p className="no-results-message">No results found.</p>
          )
        ) : (
          <p className="search-instruction-message"> school  search.</p>
        )}
      </div>
    </>
  );
}

export default Home;
