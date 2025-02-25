import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, removeTask } from '../redux/taskSlice';
import { MaterialIcons } from '@expo/vector-icons';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.taskContainer}>
      {/* Task Text - Wraps Long Text */}
      <View style={styles.textContainer}>
        <Text style={[styles.taskText, task.completed && styles.completedText]}>
          {task.title}
        </Text>
      </View>

      {/* Buttons - Stay Fixed & Aligned */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, task.completed ? styles.undoButton : styles.doneButton]}
          onPress={() => dispatch(toggleTaskStatus(task.id))}
        >
          <Text style={styles.buttonText}>{task.completed ? 'Undo' : 'Done'}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={() => dispatch(removeTask(task.id))}
        >
          <MaterialIcons name="delete" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,  // Takes remaining space
  },
  taskText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flexWrap: 'wrap', // Wraps long text
    flexShrink: 1,    // Prevents pushing buttons out
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 120, // Fixed width to prevent shifting
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
  },
  doneButton: {
    backgroundColor: 'green',
  },
  undoButton: {
    backgroundColor: 'orange',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskItem;
