import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({ task }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.slWrapper}>
        <Text style={styles.textStyle}>{task.id}</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.textStyle}>{task.title}</Text>
      </View>
      <View style={styles.tickWrapper}>
        {task.completed && <View style={styles.tick} />}
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '90%',
  },
  tickWrapper: {
    width: 24,
    height: 24,
    borderColor: '#00cc66',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    width: 12,
    height: 12,
    backgroundColor: '#00cc66',
    borderRadius: 5,
  },
  contentWrapper: {
    flex: 8,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 16,
    color: '#000000',
  },
  slWrapper: {
    width: 24,
    height: 24,
    borderColor: '#00cc66',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
