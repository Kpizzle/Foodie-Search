import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      {result.image_url && result.image_url.trim() !== '' ? (
        <Image
          style={styles.imageStyle}
          source={{ uri: result.image_url }}
        />
      ) : (
        <View style={[styles.imageStyle, styles.placeholderStyle]}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.nameStyle}>{result.name}</Text>
      <View style={styles.informationStyle}>
        <Text style={styles.ratingText}>{result.rating}</Text>
        <AntDesign
          name='star'
          size={14}
          color='#ffa500'
          style={styles.starIcon}
        />
        <Text style={styles.reviewText}>, {result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  placeholderStyle: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
  },
  nameStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  informationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: 'white',
  },
  starIcon: {
    marginLeft: 2,
    marginTop: -1, // Slight adjustment to align with text baseline
  },
  reviewText: {
    fontSize: 14,
    color: 'white',
  },
});

export default ResultsDetail;
