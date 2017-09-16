import React from 'react';
import {Text, View, Image, StyleSheet,FlatList} from 'react-native';
import Verify from './Verify';
import SettingItem from './SettingItem';

export default class SettingScreen extends React.Component {

_seperator = ()=> {
  return <Text style={{height:2,backgroundColor:'grey'}}></Text>
}


 selectRow = (item,index)=> {
   const {navigate} = this.props.navigation;

   switch (index) {
     case 0:
        navigate('NameScreen');
        break;
     case 3:
       navigate('Verify',{title:item.key});
       break;
     default:

   }

   if(index == 3) {
     navigate('Verify',{title:item.key});
   }


   console.log('this.props :'+item.key+ 'index :'+index);

 }

 _keyExtractor = (item, index) => index;

  render() {
    return (<View>
      <FlatList data={[{key:'姓名'},{key:'手机号码 '},{key:'身份证'},{key:'4实名验证'},{key:'设置'}]}
        renderItem={({item,index}) =><SettingItem title={item.key}></SettingItem>}
        ItemSeparatorComponent = {this._seperator}
        keyExtractor = {this._keyExtractor}
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
