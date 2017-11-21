import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


import Header from '../../components/Header'
import ItemList from './ItemList'

export default class Home extends Component<{}> {
 static navigationOptions = {
    title: '我的',
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/my.png')}
        style={[{height:28,width:28}, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
     super(props)
     this.state={
      
     }     
  }
    
  render() {
    return (
      <View style={styles.container}>
           <Header title="我的"/>
              <ScrollView scrollEnabled={true} horizontal={false}>
                    <View style={{paddingHorizontal:15,height:150,backgroundColor:'#4c8def',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flexDirection:"column",alignItems:'center'}}>
                            <Image  
                            source={require('./img/avatar.jpeg')}
                            style={{height:80,width:80,borderRadius:40}}
                            />  
                            <Text style={{marginTop:10,fontSize:16,color:"#fff"}}>用户名</Text> 
                         </View>      
                         {/* <View style={{flexDirection:'row',alignItems:'center'}}>
                             <Text style={{fontSize:18,color:"#fff"}}>查看详情</Text> 
                            <Image  
                            source={require('./img/rightIcon.png')}
                            style={{height:30,width:30,tintColor:"#fff"}}
                            />  
                         </View> */}
                    </View>
                    <ItemList/>
              </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  
    backgroundColor: '#ededed',
  }
});
