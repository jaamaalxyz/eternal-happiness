import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeStack } from './HomeStack';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
