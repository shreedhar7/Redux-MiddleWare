import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ReduxSagaScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Understanding Redux Saga</Text>
        <Text style={styles.sectionTitle}>What is Redux Saga?</Text>
        <Text style={styles.text}>
          Redux Saga is a middleware library that helps in handling side effects
          such as asynchronous API calls in Redux applications. It uses ES6
          generators to manage side effects in a more readable and efficient way.
        </Text>

        <Text style={styles.sectionTitle}>Why Use Redux Saga?</Text>
        <Text style={styles.text}>
  {"✅"} Handles asynchronous operations efficiently.{"\n"}{"\n"}
  {"✅"} Manages API calls and side effects in a structured manner.{"\n"}{"\n"}
  {"✅"} Uses generator functions to pause and resume execution.{"\n"}{"\n"}
  {"✅"} Improves maintainability of Redux applications.
</Text>


        <Text style={styles.sectionTitle}>Installation</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>npm install redux-saga</Text>
        </View>

        <Text style={styles.sectionTitle}>Basic Example</Text>
        <Text style={styles.text}>Here's how you can use Redux Saga in a React Native app:</Text>

        <View style={styles.codeContainer}>
          <ScrollView horizontal>
            <Text style={styles.codeText}>{`
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";

const FETCH_DATA = "FETCH_DATA";
const FETCH_SUCCESS = "FETCH_SUCCESS";

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
    const data = yield response.json();
    yield put({ type: FETCH_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchData);
            `}</Text>
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>How It Works</Text>
        <Text style={styles.text}>
  {"✅"} The `fetchDataSaga` function listens for `FETCH_DATA` actions.{"\n"}{"\n"}
  {"✅"} It makes an API request and dispatches `FETCH_SUCCESS` with the result.{"\n"}{"\n"}
  {"✅"} `watchFetchData` watches for actions and runs `fetchDataSaga` when needed.{"\n"}{"\n"}
  {"✅"} `sagaMiddleware.run(watchFetchData)` starts the saga in the Redux store.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop : 20,
    marginBottom : -25
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: "#333333",
    marginTop: 5,
  },
  codeContainer: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  codeText: {
    color: "grey",
    fontFamily: "monospace",
    fontSize: 14,
  },
});

export default ReduxSagaScreen;
