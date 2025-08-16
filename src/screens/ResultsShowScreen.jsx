import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <Text>Loading Info...</Text>;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.ImageStyle}
              source={{ uri: item }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
