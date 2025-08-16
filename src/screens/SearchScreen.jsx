import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      if (!price) {
        return !result.price;
      }
      return result.price && result.price.length === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchTerm={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
  },
});

export default SearchScreen;
