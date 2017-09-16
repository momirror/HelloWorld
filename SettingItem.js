import React from 'react';
import {View, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {MyStyles} from './Styles';
import {Constant} from './Constants';

import {connect} from 'react-redux';
import {increase,decrease,reset} from './actions/actions';

 class SettingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {
        console.log('selectRow')
      }}>
        <Image style={MyStyles.settingItemImg} source={require('./img/test.png')}></Image>
        <Text style={MyStyles.setttingItemTitle} onPress={() => {
          console.log('selectText')
        }}>{this.props.title}
        </Text>
        <Text>{this.props.MyCounter.count}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  MyCounter:state.counter
})

export default connect(mapStateToProps)(SettingItem);
