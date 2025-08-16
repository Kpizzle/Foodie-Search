import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
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
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
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
