import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { getDayOfWeek } from '../utils';
import TaskItem from './TaskItem';

const TaskSection = ({ taskList, toggleTask }) => {
  const dayOfWeek = getDayOfWeek();

  return (
    <View style={styles.taskList}>
      {taskList
        .filter((item) => {
          if (item.id === 3 && dayOfWeek === 5) {
            return item;
          }
          return item;
        })
        .map((task) => (
          <Pressable onPress={() => toggleTask(task.id)} key={task.id}>
            <TaskItem task={task} toggleTask={toggleTask} />
          </Pressable>
        ))}
    </View>
  );
};

export default TaskSection;

const styles = StyleSheet.create({
  taskList: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
