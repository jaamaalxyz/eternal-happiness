import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WEEK_DAYS } from '../model';
import { getCompletePercentage, getDayOfWeek } from '../utils';

const Hero = ({ completedCount, taskList, userName }) => {
  const dayOfWeek = getDayOfWeek();
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Eternal Happiness!</Text>
        <Text style={styles.subTitle}>
          May you find peace and joy in your life!
        </Text>
        <Text style={styles.greet}>Wish you a nice day, {userName}!</Text>
      </View>
      <View>
        <Text style={styles.subject}>{WEEK_DAYS[dayOfWeek]} Obligation</Text>
        <Text style={styles.subjectText}>
          Today you have completed:{' '}
          {getCompletePercentage(completedCount, taskList)?.toFixed(0)}%
        </Text>
      </View>
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  header: {
    marginVertical: 40,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  subTitle: {
    color: '#dc143c',
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
  greet: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 10,
  },
});
