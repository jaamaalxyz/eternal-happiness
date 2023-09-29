import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: 20,
        }}
      >
        Profile feature coming soon...
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8736c7',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#AAEEFF',
    textAlign: 'center',
  },
});
