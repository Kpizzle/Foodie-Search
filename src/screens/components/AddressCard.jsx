import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AddressCard = ({ result }) => {
  const { address1, address2, address3, city } = result.location;
  return (
    <View style={styles.AddressCardStyle}>
      {address1 ? <Text style={styles.textStyle}>{address1}</Text> : null}
      {address2 ? <Text style={styles.textStyle}>{address2}</Text> : null}
      {address3 ? <Text style={styles.textStyle}>{address3}</Text> : null}
      {city ? <Text style={styles.textStyle}>{city}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  AddressCardStyle: {
    marginTop: 10,
    color: 'white',
  },
  textStyle: {
    color: 'white',
  },
});

export default AddressCard;
