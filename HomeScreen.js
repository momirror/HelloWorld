import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        {/* <Button onPress={() => navigate('Chat', {user: 'XiYun'})} title="Chat with XiYun"/> */}
      </View>
    );
  }
}

module.exports = HomeScreen;
