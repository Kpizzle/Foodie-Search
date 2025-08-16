import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather
        name='search'
        style={styles.IconStyle}
      />
      <TextInput
        autoCapitalize='none'
        style={styles.inputStyle}
        placeholder='Search...'
        placeholderTextColor='#000'
        value={searchTerm}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#b8baba',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
