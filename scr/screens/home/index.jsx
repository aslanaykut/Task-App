//import liraries
import React, {useEffect, useState} from 'react';
import {View, RefreshControl, StyleSheet, FlatList} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponent from '../../components/home/headerComponent';

// create a component
const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [complated, setComplated] = useState(0);
  const [cancel, setTCancel] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
      console.log(tasks);
      let comlatedCount = 0;
      let PendingCount = 0;
      let onGoingCount = 0;
      let CancelCount = 0;
      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1) {
          onGoingCount++;
        }
        if (task.status === 2) {
          PendingCount++;
        }
        if (task.status === 3) {
          comlatedCount++;
        }
        if (task.status === 4) {
          CancelCount++;
        }
        setComplated(comlatedCount);
        setOngoing(onGoingCount);
        setPending(PendingCount);
        setTCancel(CancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true); // Yenileme başladığında refreshing state'ini true yap
    getTask(); // Görevleri yeniden al
    setRefreshing(false); // Yenileme bittiğinde refreshing state'ini false yap
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            complated={complated}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          // refreshControl prop'unu kullanarak pull-to-refresh işlevselliği ekleniyor
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
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
export default Home;
