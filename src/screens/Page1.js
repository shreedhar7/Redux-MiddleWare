import React, { useState } from 'react';
import { 
  View, TextInput, TouchableOpacity, Text, StyleSheet, Linking 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import TaskList from '../components/TaskList';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Page1 = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), title: task, completed: false }));
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="#333" />
      </TouchableOpacity>

      {/* Screen Title */}
      <Text style={styles.title}>📝 Your Tasks</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#666"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <LinearGradient colors={['#007BFF', '#0056b3']} style={styles.gradient}>
            <Text style={styles.addButtonText}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <TaskList />

      {/* GitHub Link */}
      <TouchableOpacity 
        style={styles.githubLink} 
        onPress={() => Linking.openURL('https://github.com/shreedhar7/Redux-MiddleWare')}
      >
        <Text style={styles.githubText}>🌐 View on GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',  // Light background
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  githubLink: {
    marginTop: 0,
    alignSelf: 'center',
    marginBottom : 30
  },
  githubText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Page1;
