import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('Burgers');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      let response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Hastings',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong.');
    }
  };
  return [searchApi, results, errorMessage];
};
