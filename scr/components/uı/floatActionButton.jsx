//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#ffffff" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ccce4',
    width: 70,
    height: 70,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});

//make this component available to the app
export default FloatActionButton;
