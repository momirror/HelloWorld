import {StyleSheet} from 'react-native';

var MyStyles = StyleSheet.create({

  input:{
    color:'red',
    fontSize:24,
  },

  settingItemContainer:{
    // flex:1,
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'stretch',
  },

  setttingItemTitle:{
    marginLeft:120,
    backgroundColor:'red',
  },

  settingItemImg:{
      width:30,
      height:30,
      backgroundColor:'green',
  },


});

var TestStyles = StyleSheet.create({

  input:{
    color:'green',
    fontSize:24,
  }

});

export {MyStyles,TestStyles};
