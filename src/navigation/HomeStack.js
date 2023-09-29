import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable } from 'react-native';
import { ProfileIcon } from '../assets/svg';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TaskList from '../screens/TaskList';

const Stack = createStackNavigator();

export const HomeStack = ({}) => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          headerStyle: {
            backgroundColor: '#00cc66',
            borderBottomWidth: 0.5,
            borderBottomColor: '#00aa66',
          },
          headerTintColor: '#FFFFFF',
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: '#FFFFFF',
                borderRadius: 50,
                padding: 5,
                marginRight: 20,
              }}
            >
              <ProfileIcon />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#00cc66',
            borderBottomWidth: 0.5,
            borderBottomColor: '#00aa66',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
};
