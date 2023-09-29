import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskSection from '../components/TaskSection';
import { useTask } from '../hooks/useTask';
import { WEEK_DAYS } from '../models';
import { getCompletePercentage, getDayOfWeek } from '../utils';

const TaskList = ({}) => {
  const dayOfWeek = getDayOfWeek();
  const { taskList, toggleTask, completedCount } = useTask();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.subject}>{WEEK_DAYS[dayOfWeek]} Obligation</Text>
        <Text style={styles.subjectText}>
          Today you have completed:{' '}
          {getCompletePercentage(completedCount, taskList)?.toFixed(0)}%
        </Text>
      </View>
      <TaskSection taskList={taskList} toggleTask={toggleTask} />
      <Text style={styles.thanks}>Thank you for using the app!</Text>
    </ScrollView>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#00cc66',
  },
  subject: {
    color: '#8736c7',
    fontSize: 18,
    textAlign: 'center',
  },
  subjectText: {
    color: '#FFFFFF',
    marginVertical: 10,
    textAlign: 'center',
  },
  thanks: {
    color: 'white',
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
});
