import React from 'react';
import {Text,View,Image,StyleSheet,Button } from 'react-native';


class ChatScreen extends React.Component {
  // static navigationOptions = ({navigation}) => ({title: `Chat with ${navigation.state.params.user}`});
  // static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.params.user}`,
  // });
  render() {
    // const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with her.</Text>
      </View>
    );
  }
}

module.exports = ChatScreen;
