import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {ADDTASKS, TASKS, TASKDETAIL} from '../utils/routes';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
