import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';


import Header from '../../components/Header'


export default class Home extends Component<{}> {
 static navigationOptions = {
    title: '人员管理',
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/pm.png')}
        style={[{height:28,width:28}, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
     super(props)
     this.state={
       isSwiper:false
     }     
  }
  componentDidMount(){
    setTimeout(()=>{
          this.setState({
            isSwiper:true
          })
    },0)
  }      
  render() {
    return (
      <View style={styles.container}>
            <Header title="人员管理"/>
           
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
