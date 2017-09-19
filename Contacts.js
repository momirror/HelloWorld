import React from 'react';
import {Text, View, Image, StyleSheet, Button,SectionList} from 'react-native';
import ContactItem from './ContactItem';
import {MyStyles,TestStyles} from './Styles';


class AllContactsScreen extends React.Component {
  
  test = ()=>{
    return 10;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections = {
            [
              {title:'A',data:[{key:'阿爸'}]},
              {title:'B',data:[{key:'班长'},{key:'宝荣'},{key:'办公室'}]}
            ]
          }

          renderItem={({item})=><Text style={styles.item,TestStyles.input}>{item.key}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          >
        </SectionList>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)',
  },

  item:{
    padding: 10,
    fontSize: 18,
    height:44,
  }
});

module.exports = AllContactsScreen;
