import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";
import SettingScreen from './Setting';
import HomeScreen from './HomeScreen';
import AllContactsScreen from './Contacts';
import ChatScreen from './ChatsScreen';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Home",
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/1.png')} style={[styles.icon]}/>)
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: "聊天",
      tabBarLabel: '聊天',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/2.png')} style={[styles.icon]}/>)
    }
  },
  Contacts: {
    screen: AllContactsScreen,
    navigationOptions: {
      tabBarLabel: '联系人',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/3.png')} style={[styles.icon]}/>)
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: '设置',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/4.png')} style={[styles.icon]}/>)
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,

  tabBarOptions: {
    style: {
      height: 59
    },
    showIcon: true,
    // activeBackgroundColor:'white',
    // activeTintColor:'#FF0000',
    // inactiveBackgroundColor:'white',
    // inactiveTintColor:'#aaa',
    // showLabel:false,
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
  headerRight: <Button title="Info" onPress={() => {
      alert('haha')
    }}></Button>
};

const HelloWorld = StackNavigator({
  Home: {
    screen: MainScreenNavigator
  }
});

var styles = StyleSheet.create({
  con: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
