import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeroSection = ({ userName }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to Eternal Happiness!</Text>
      <Text style={styles.subTitle}>
        May you find peace and joy in your life!
      </Text>
      <Text style={styles.greet}>Wish you a nice day, {userName.trim()}!</Text>
    </View>
  );
};

export default HeroSection;

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
    color: '#99143a',
  },
  greet: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 10,
  },
});
