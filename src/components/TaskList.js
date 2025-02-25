import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/taskActions';
import TaskItem from './TaskItem';

const TaskList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TaskItem task={item} />}
    />
  );
};

export default TaskList;
