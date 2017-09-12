import React from 'react';
import {Text, View, Image, StyleSheet, Button,TextInput} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';

class HomeScreen extends React.Component {
 a = 11;

static b = 2;
  constructor(props){
    super(props);
    this.c = 13;
    this.state = {showText:true,
      dis:'haha',
    };

    // console.log('this.a '+this.a);


    setInterval(()=>{
      this.setState(previousState=>{
        // console.log("this.name "+this.name);
        // console.log("this.addr "+this.addr);
        return {showText:!this.state.showText};
      });
    },1000);
  }


componentDidMout(){
    alert('componentDidMount');
    // console.log('did mount');
    this.dd = 1;

}

// getDefaultProps(){
//   alert('getDefaultProps');
// }

componentWillUnmount() {
    // alert('componentWillUnmount');
    // console.log('componentWillUnmount');

  }


componentWillUpdate() {
  // alert(this.dd);
  // console.log('componentWillUpdate');
  this.name = 'msp22';
  this.addr = 'huoxing';
}

textChange=(text)=>{
  // console.log(text);
};

onSubmit=()=>{
  // console.log('onSubmit');
}

  render() {

    // console.log(this.name);
    // console.warn('aaaa');

    const {MyEventEmitter} = NativeModules;
    const eventEmitter = new NativeEventEmitter(MyEventEmitter);

    // alert(eventEmitter);
                      //    eventEmitter.addListener('EventReminder',(reminder)=>
                      //    console.log(reminder.name)
                      //  );
    // const subscription = eventEmitter.addListener('EventReminder',(reminder)=> alert(reminder.name));

    // 别忘了取消订阅，通常在componentWillUnmount生命周期方法中实现。
    // subscription.remove();

    const {navigate} = this.props.navigation;
    var date = new Date();
    var contacts = NativeModules.ContactsService;
    contacts.addEvent('aa','bb');
    contacts.addEvent2('Birthday Party', '4 Privet Drive, Surrey', date.getTime());
    contacts.sayHello('xiyun');
    contacts.sayHello2('zhangsan','how','are','you');
    contacts.findEvents((error,content) => {
      if(error) {

      } else {
        // console.log(content);
      }
    });












    return (
      <View>
        <TextInput style={styles.input}
          placeholder="哈哈哈"
          onChangeText={this.textChange}
          onSubmitEditing={this.onSubmit}
          ></TextInput>
        <Button onPress={() => navigate('Chat', {user: 'XiYun'})} title="Chat with XiYun"/>

        {/* <Image source={{uri:'girl.png'}} style={{width:400,height:400}}></Image> */}
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  input:{
    width:200,
    height:50,
    backgroundColor:'#00ff00',
  }
});

module.exports = HomeScreen;
