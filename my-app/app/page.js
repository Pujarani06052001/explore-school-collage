"use client";
import React, { useState } from 'react';
import Data from './data'; 
function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredData, setFilteredData] = useState(Data); 

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredData(Data); 
    } else {
      setFilteredData(
        Data.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    setShowResults(true); 
  };

  return (
    <>
      <h1 className='school-search'>School Search</h1>
      <p className='pragraph'>Find the right school for your child.</p>
     

      <div className='search-box'>
        <input
          type="text"
          placeholder="School Name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className='main-option'>

      <div className='Choose-option'>
        <button>Choose City</button>
        <button>Choose Board</button>
        <button>Choose-Type</button>
        <button>Hostle-Facility</button>
      </div>

      </div>

      

      <div className="container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <h2 className="card-title">{item.title}</h2>
              <p className="card-detail">City: {item.city}</p>
              <p className="card-detail">Place: {item.place}</p>
              <p className="card-detail">Rating: {item.rating}</p>
              <button className='apply'>Apply Now</button>

            </div>

          ))

        ) : (
          showResults && <p>No results found.</p>
        )}
      </div>
    </>
  );
}

export default Home;
