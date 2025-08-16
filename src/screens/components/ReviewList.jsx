import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../../api/yelp';
import ReviewCard from './ReviewCard';
import { withNavigation } from 'react-navigation';

const ReviewList = ({ id, navigation }) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async (id) => {
    const res = await yelp.get(`/${id}/reviews`);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    getReviews(id);
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        keyExtractor={(review) => review.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Review', { review: item });
              }}>
              <ReviewCard review={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ReviewList);
