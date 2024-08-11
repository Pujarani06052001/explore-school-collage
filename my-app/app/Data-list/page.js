"use client";
import React, { useEffect, useState } from 'react';

const SchoolsList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const storedSchools = JSON.parse(localStorage.getItem('schools')) || [];
    setSchools(storedSchools);
  }, []);

  return (
    <div className="container">
      <h1>Schools List</h1>
      <div className="schools-list">
        {schools.length === 0 ? (
          <p>No schools added yet.</p>
        ) : (
          <ul>
            {schools.map((school, index) => (
              <li key={index} className="school-item">
                <h3>{school.name}</h3>
                <p>{school.address}, {school.city}, {school.state}</p>
                <p>Contact: {school.contact}</p>
                <p>Email: {school.email_id}</p>
                {school.image && <img src={school.image} alt="School" width="100" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SchoolsList;
