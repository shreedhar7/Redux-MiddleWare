import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Page2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>Understanding Redux & Thunk</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subHeading}>Introduction to Redux</Text>
        <Text style={styles.paragraph}>
          Redux is a state management library used to store and manage the state of an application globally.
          In this project, Redux is used to manage the task list, ensuring that all components can access and update it efficiently.
        </Text>

        <Text style={styles.subHeading}>Why Use Redux?</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>✅ Centralized state management for consistency</Text>
          <Text style={styles.listItem}>✅ Predictable state updates through reducers</Text>
          <Text style={styles.listItem}>✅ Scalability and maintainability in large applications</Text>
        </View>

        <Text style={styles.subHeading}>Setting Up Redux Store</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {`import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: { tasks: taskReducer },
});

export default store;`}
          </Text>
        </View>
        <Text style={styles.paragraph}>
          This store holds the entire application's state, allowing access from any component.
        </Text>

        <Text style={styles.subHeading}>Redux Slice for Tasks</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {`import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addTask: (state, action) => { state.items.push(action.payload); },
    toggleTaskStatus: (state, action) => { 
      const task = state.items.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed; 
    },
    removeTask: (state, action) => { 
      state.items = state.items.filter(task => task.id !== action.payload); 
    },
  },
});

export const { addTask, toggleTaskStatus, removeTask } = taskSlice.actions;
export default taskSlice.reducer;`}
          </Text>
        </View>

        <Text style={styles.subHeading}>Using Redux Thunk for API Calls</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {`import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://api.example.com/tasks');
  return response.json();
});`}
          </Text>
        </View>
        <Text style={styles.paragraph}>
          Redux Thunk allows asynchronous API calls within Redux, handling loading, success, and failure states.
        </Text>

        <Text style={styles.subHeading}>Connecting Redux to Components</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {`import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/taskActions';

const dispatch = useDispatch();
const { items, loading } = useSelector(state => state.tasks);

useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);`}
          </Text>
        </View>
        <Text style={styles.paragraph}>
          Components can dispatch actions and read state using `useDispatch` and `useSelector` hooks.
        </Text>

        <Text style={styles.subHeading}>Conclusion</Text>
        <Text style={styles.paragraph}>
          Using Redux Toolkit and Thunk in this project makes state management efficient, scalable, and easy to maintain.
          It helps in keeping the code organized and improves the performance of the app.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: '#007BFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, // Space between back button and heading
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
  listContainer: {
    backgroundColor: '#e8f0fe',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 3,
  },
  codeBlock: {
    backgroundColor: '#2d2d2d',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  code: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#fff',
  },
});
