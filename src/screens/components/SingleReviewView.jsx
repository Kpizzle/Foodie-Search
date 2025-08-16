import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SingleReviewView = ({ navigation }) => {
  const review = navigation.getParam('review');
  return (
    <View style={style.reviewStyle}>
      <Text>{review.user.name}</Text>
      <Text>Customer Rating: {review.rating}</Text>
      <Text style={{ paddingTop: 15 }}>{review.text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  reviewStyle: {
    padding: 10,
  },
});

export default SingleReviewView;
