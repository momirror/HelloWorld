import React from 'react';
import {Text,View,Image,StyleSheet,Button,ScrollView } from 'react-native';


class ChatScreen extends React.Component {
  // static navigationOptions = ({navigation}) => ({title: `Chat with ${navigation.state.params.user}`});
  // static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.params.user}`,
  // });
  render() {
    // const {params} = this.props.navigation.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false}
        onScroll = {()=>{console.log('scroll start');}}
        >
        <Text>Chat with her.</Text>
        <Image source={{uri:'girl.png'}} style={{width:400,height:400}}></Image>
        <Image source={{uri:'girl.png'}} style={{width:400,height:400}}></Image>
        <Image source={{uri:'girl.png'}} style={{width:400,height:400}}></Image>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer:{
    // backgroundColor:'red',
  }
});

module.exports = ChatScreen;
