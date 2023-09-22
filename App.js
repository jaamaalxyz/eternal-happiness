import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Hero from './src/components/Hero';
import TaskList from './src/components/TaskList';
import { useTask } from './src/hooks/useTask';

export default function App() {
  const { taskList, toggleTask, completedCount } = useTask();
  const [isWelcomeModalVisible, setIsWelcomeModalVisible] = useState(true);
  const [userName, setUserName] = useState('');

  const toggleWelcomeModal = () => {
    setIsWelcomeModalVisible(!isWelcomeModalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Hero
          completedCount={completedCount}
          taskList={taskList}
          userName={userName}
        />
        <TaskList taskList={taskList} toggleTask={toggleTask} />

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Thank you for using the app!
        </Text>
      </ScrollView>
      <StatusBar style="auto" />

      <WelcomeModal
        isWelcomeModalVisible={isWelcomeModalVisible}
        toggleWelcomeModal={toggleWelcomeModal}
        userName={userName}
        setUserName={setUserName}
      />
    </View>
  );
}

const WelcomeModal = ({
  isWelcomeModalVisible,
  toggleWelcomeModal,
  userName,
  setUserName,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isWelcomeModalVisible}
      onRequestClose={toggleWelcomeModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}
        >
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Welcome to the app!
          </Text>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 20,
              paddingLeft: 10,
            }}
            placeholder="Enter your name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <Pressable
            style={{
              backgroundColor: '#00cc66',
              borderRadius: 10,
              padding: 10,
              elevation: 2,
            }}
            onPress={() => {
              toggleWelcomeModal();
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
