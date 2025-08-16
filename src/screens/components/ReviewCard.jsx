import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <View style={style.cardStyle}>
      <Text>Customer Rating: {review.rating}</Text>
      <Text>{review.text}</Text>
      <Text style={style.userNameStyle}>{review.user.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  cardStyle: {
    paddingTop: 15,
    maxWidth: 200,
    paddingRight: 10,
  },
  userNameStyle: {
    paddingTop: 10,
  },
});

export default ReviewCard;
