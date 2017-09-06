import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

class AllContactsScreen extends React.Component {

  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('Chat', {user: 'XiYun'})} title="Chat with XiYun"/>
        <Text>List of recent chats</Text>
      </View>
    );
  }

}

module.exports = AllContactsScreen;
