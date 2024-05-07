import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import {Formik} from 'formik';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import CustomDatePicker from '../../components/uı/customDatePicker';
import {taskSchema} from '../../utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constants';
const AddTask = () => {
  const saveTask = async values => {
    /* await AsyncStorage.removeItem('item'); */
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
      console.log('başarılı');
    } catch (e) {
      //save error
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => saveTask(values)}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'TITLE'}
              placeholder="Enter Title"
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'basic'}
              caption={errors.title}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'DESCRIPTION'}
              placeholder="Enter Description Informations"
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger' : 'basic'}
              caption={errors.description}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'START DATE'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'END DATE'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'basic'}
              caption={errors.endDate}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Bills</Radio>
              <Radio status="success">Courses</Radio>
              <Radio status="success">Date</Radio>
            </RadioGroup>
            <Button
              status="success"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

//make this component available to the app
export default AddTask;
