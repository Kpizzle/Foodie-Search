import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AddressCard = ({ result }) => {
  const { address1, address2, address3, city } = result.location;
  return (
    <View style={styles.AddressCardStyle}>
      {address1 ? <Text>{address1}</Text> : null}
      {address2 ? <Text>{address2}</Text> : null}
      {address3 ? <Text>{address3}</Text> : null}
      {city ? <Text>{city}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  AddressCardStyle: {
    marginTop: 10,
  },
});

export default AddressCard;
