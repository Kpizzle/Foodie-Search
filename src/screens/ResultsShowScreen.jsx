import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import AddressCard from './components/AddressCard';
import ReviewList from './components/ReviewList';
import AntDesign from '@expo/vector-icons/AntDesign';

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
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#351531',
        flex: 1,
      }}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>{result.name}</Text>
        <Text style={styles.resultStyle}>
          {result.rating}
          <AntDesign
            name='star'
            size={14}
            color='#ffa500'
          />
        </Text>
      </View>
      <View>
        <AddressCard result={result} />
        {result.photos && result.photos.length > 0 ? (
          <FlatList
            horizontal
            style={styles.ImageListStyle}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return (
                <Image
                  style={styles.ImageStyle}
                  source={{ uri: item }}
                  resizeMode='cover'
                />
              );
            }}
          />
        ) : (
          <Text>No photos available</Text>
        )}
        <ReviewList id={result.id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageStyle: {
    width: 120,
    height: 120,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  ImageListStyle: {
    height: 120,
    marginVertical: 10,
  },
  headingTextStyle: {
    fontSize: 40,
    paddingBottom: 10,
    color: 'white',
  },
  resultStyle: {
    color: 'white',
  },
});

export default ResultsShowScreen;
