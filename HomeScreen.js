import React from 'react';
import {Text, View, Image, StyleSheet, Button,TextInput} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';
import {connect} from 'react-redux';
import {increase,decrease,reset} from './actions/actions';

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

increase = () => {
    console.log('increase');
    this.props.dispatch(increase());
}

decrease = () => {
    console.log('decrease');
    this.props.dispatch(decrease());
}

reset = () => {
    console.log('reset');
    // this.props.dispatch(reset());
    
    this.props.dispatch(dispatch=>{
      setTimeout(()=>{
        this.props.dispatch(reset());
      },2000);
    });
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
       <Text>使用redux管理状态的计数器</Text>
       <Text  style={{backgroundColor:'red'}}>{this.props.counter2.count}</Text>
       <Button title="+1" onPress={this.increase}/>
       <Button title="-1" onPress={this.decrease}/>
       <Button title="归0" onPress={this.reset}/>
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

//一定要进行redux和componet的绑定，否则this.props.dispatch等相关方法无法调用。

const mapStateToProps = state => ({
  counter2:state.counter //key 将会绑定到this.props中,值是在reducer中定义的回调函数 。
})

export default connect(mapStateToProps)(HomeScreen);
// module.exports = HomeScreen;
