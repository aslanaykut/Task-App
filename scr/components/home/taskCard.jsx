//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {taskValues} from '../../utils/constants';
import {TaskSquare} from 'iconsax-react-native';
import {setCategory} from '../../utils/functions';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';
// create a component
const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor: taskValues.find(task => task.status === item?.status)
            ?.color,
          padding: 3,
          borderRadius: 5,
        }}>
        {taskValues.find(task => task.status === item?.status)?.icon}
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {item.description}
        </Text>
        <View>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {moment(item.startDate).format('DD/MM/YYYY')}-
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {setCategory(item.category)}
        </Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//make this component available to the app
export default TaskCard;
