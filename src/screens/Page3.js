import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ReduxThunkGuide = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Understanding Redux Thunk: A Complete Guide</Text>
        <Text style={styles.sectionTitle}>1. What is Redux Thunk?</Text>
        <Text style={styles.content}>
  Redux Thunk is a middleware that allows you to write asynchronous logic in Redux.{"\n"}
  By default, Redux only supports synchronous updates to the state.{"\n\n"}
  However, modern applications often need to perform asynchronous operations such as fetching data from an API, delaying state updates, or interacting with a database.{"\n\n"}
  Thunk middleware extends Redux’s capabilities by allowing action creators to return a function instead of a plain action object.{"\n"}
  This function can then perform side effects (such as API calls) and dispatch multiple actions based on the result.
</Text>

        
        <Text style={styles.sectionTitle}>2. Why Do We Need Redux Thunk?</Text>
        <Text style={styles.subHeading}>The Problem with Redux (Without Thunk)</Text>
<Text style={{fontSize: 16,}}>
  Redux follows a strict pattern:
</Text>

<View style={styles.listContainer}>
  <Text style={styles.listItem}>• Dispatch an action</Text>
  <Text style={styles.listItem}>• Reducer updates the state</Text>
  <Text style={styles.listItem}>• UI reflects the new state</Text>
</View>

<Text style={{fontSize: 16,}}>
  This works well for synchronous updates but struggles with asynchronous operations such as:
</Text>

<View style={styles.listContainer}>
  <Text style={styles.listItem}>• Fetching data from an API</Text>
  <Text style={styles.listItem}>• Writing to a database</Text>
  <Text style={styles.listItem}>• Waiting for user input</Text>
</View>

<Text style={{fontSize: 16,}}>
  Redux alone cannot pause execution while waiting for an API response. If you try to handle async operations within a Redux action, you’ll get errors since Redux expects a plain JavaScript object.
</Text>

<Text style={styles.subHeading}>The Solution: Redux Thunk</Text>
<Text style={{fontSize: 16,}}>
  Redux Thunk solves this problem by allowing actions to return functions instead of objects. These functions receive <Text style={styles.bold}>dispatch</Text> and <Text style={styles.bold}>getState</Text> as arguments, enabling:
</Text>

<View style={styles.listContainer}>
  <Text style={styles.listItem}>✔ Delayed execution of actions</Text>
  <Text style={styles.listItem}>✔ Multiple dispatches within a single action</Text>
  <Text style={styles.listItem}>✔ Conditional logic before dispatching actions</Text>
</View>

        
        <Text style={styles.sectionTitle}>3. How Redux Thunk Works</Text>
        <Text style={styles.code}>
          {`const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
    }
  };
};`}
        </Text>
        
        <Text style={styles.sectionTitle}>4. Installing Redux Thunk</Text>
        <Text style={styles.code}>npm install redux-thunk</Text>
        <Text style={styles.code}>yarn add redux-thunk</Text>

        <Text style={styles.sectionTitle}>5. Implementing Redux Thunk in a React Project</Text>
        <Text style={styles.code}>
          {`import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './userSlice';

const store = configureStore({
  reducer: { user: userReducer },
  middleware: [thunk],
});

export default store;`}
        </Text>
        
        <Text style={styles.sectionTitle}>6. Advantages of Redux Thunk</Text>
        <Text style={styles.content}>
          ✅ Handles Async Operations
          ✅ Flexible
          ✅ Optimized Performance
          ✅ Better Debugging
        </Text>
        
        <Text style={styles.sectionTitle}>7. Conclusion</Text>
        <Text style={styles.content}>
          Redux Thunk is a powerful middleware that extends Redux to handle asynchronous logic efficiently.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5', // Light background
      paddingTop: 40,
      paddingHorizontal: 15,
    },
    scrollContainer: {
      paddingBottom: 20,
    },
    backButton: {
      top: 10,
      left: 0,
      marginBottom: 20
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#121212', // Dark text for contrast
      marginBottom: 15,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6200EE',
      marginTop: 15,
      marginBottom: 5,
    },
    content: {
      fontSize: 16,
      color: '#333', // Dark text for readability
      marginBottom: 10,
    },
    code: {
      fontSize: 14,
      backgroundColor: '#1E1E1E', // Dark background for code
      color: '#80CBC4',
      padding: 10,
      borderRadius: 5,
      fontFamily: 'monospace',
      marginBottom: 10,
    },
    listContainer: {
        marginVertical: 5,
        paddingLeft: 10,
        fontSize: 16,
      },
      listItem: {
        fontSize: 16,
        marginVertical: 2,
        color: '#333',
      },
      bold: {
        fontWeight: 'bold',
        color: '#000',
      },
      
  });
  
  export default ReduxThunkGuide;
  
