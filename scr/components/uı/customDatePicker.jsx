//import liraries
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Datepicker} from '@ui-kitten/components';

// create a component
const CustomDatePicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CustomDatePicker;
