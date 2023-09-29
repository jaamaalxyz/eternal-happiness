import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HeroSection from '../components/HeroSection';
import WelcomeModal from '../components/WelcomeModal';

const Home = ({}) => {
  const navigation = useNavigation();
  const [isWelcomeModalVisible, setIsWelcomeModalVisible] = useState(true);
  const [userName, setUserName] = useState('');

  const toggleWelcomeModal = () => {
    setIsWelcomeModalVisible(!isWelcomeModalVisible);
  };

  return (
    <View style={styles.container}>
      <HeroSection userName={userName} />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('TaskList');
        }}
      >
        <Text style={styles.buttonText}>See your today's task</Text>
      </Pressable>

      <WelcomeModal
        isWelcomeModalVisible={isWelcomeModalVisible}
        toggleWelcomeModal={toggleWelcomeModal}
        userName={userName}
        setUserName={setUserName}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
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
