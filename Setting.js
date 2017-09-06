import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class SettingScreen extends React.Component {
  render() {
    return (<View>
      <Text>这是一个放丰单独文件中的自定义组件</Text>
      <Image source={require('./img/test.png')} style = {styles.img} />
    </View>);


  }
}

var styles = StyleSheet.create({
    img:{
      width:100,
      height:50,
    }
});

module.exports = SettingScreen;
