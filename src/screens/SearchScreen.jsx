import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';
import { getCurrentLocation } from '../utils/locationUtils';

import * as Location from 'expo-location';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const [location, setLocation] = useState(null);
  const [locationErrorMessage, setLocationErrorMessage] = useState('');

  useEffect(() => {
    setLocation(getCurrentLocation());
  }, []);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      if (!price) {
        return !result.price;
      }
      return result.price && result.price.length === price;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#351531', paddingTop: 60 }}>
      <SearchBar
        searchTerm={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {locationErrorMessage ? (
        <Text style={styles.errorStyle}>{locationErrorMessage}</Text>
      ) : null}
      {results.length > 0 ? (
        <Text style={styles.searchResultStyle}>
          We have found {results.length} results
        </Text>
      ) : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice(1)}
          title='Cost Effective'
        />
        <ResultsList
          results={filterResultsByPrice(2)}
          title='Bit Pricier'
        />
        <ResultsList
          results={filterResultsByPrice(3)}
          title='Big Spender'
        />
        <ResultsList
          results={filterResultsByPrice(0)}
          title='Unknown'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultStyle: {
    marginLeft: 15,
    marginBottom: 10,
    color: 'white',
  },
  errorStyle: {
    marginLeft: 15,
    marginBottom: 10,
    color: 'red',
  },
});

export default SearchScreen;
