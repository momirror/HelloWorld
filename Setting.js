import React from 'react';
import {Text, View, Image, StyleSheet,FlatList} from 'react-native';
import Verify from './Verify';

export default class SettingScreen extends React.Component {

_seperator = ()=> {
  return <Text style={{height:2,backgroundColor:'grey'}}></Text>
}


 selectRow = ()=> {
   const {navigate} = this.props.navigation;
   console.log('select row');
   navigate('Verify');

 }

  render() {
    return (<View>
      <FlatList data={[{key:'姓名'},{key:'手机号码 '},{key:'身份证'},{key:'4实名验证'},{key:'设置'}]}
        renderItem={({item}) => <Text style={styles.item} onPress={this.selectRow}>{item.key}</Text>}
        ItemSeparatorComponent = {this._seperator}
        ></FlatList>
    </View>);


  }
}

var styles = StyleSheet.create({
    img:{
      width:100,
      height:50,
    },
    container:{
      flex:1,
      paddingTop:22,
    },

    item:{
      padding: 10,
      fontSize: 18,
      height:44,
      backgroundColor:'white',
    }
});
