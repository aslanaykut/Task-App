//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const StorageExample = () => {
  const [token, settoken] = useState('');
  const setMytoken = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
    }
  };
  const getMytoken = async value => {
    try {
      const token = await AsyncStorage.getItem('token');
      settoken(token);
    } catch (e) {
      // saving error
    }
  };
  const removeMytoken = async value => {
    try {
      const token = await AsyncStorage.removeItem('token');
      settoken(token);
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    getMytoken();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 15}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{token}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setMytoken('WlURswYtwWkHzmnFOcmQP5vyQpx4xvuk')}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          borderRadius: 100,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeMytoken()}
        style={{
          backgroundColor: 'orange',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          borderRadius: 100,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default StorageExample;
