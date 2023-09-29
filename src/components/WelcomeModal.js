import { Modal, Pressable, Text, TextInput, View } from 'react-native';

export const WelcomeModal = ({
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
              if (userName !== '') {
                toggleWelcomeModal();
              }
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Okay!</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
