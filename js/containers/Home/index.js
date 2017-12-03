import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';


import Header from '../../components/Header'
import Swiper from '../../components/Swiper'
import Grid from './Grid'
import HotNews from './HotNews'
import Circle from '../../androidUi/Circle';
const { width, height } = Dimensions.get('window')
export default class Home extends Component<{}> {
 static navigationOptions = {
    title: '主页',
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[{height:28,width:28}, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
     super(props)
     this.state={
       isSwiper:false,
       isOffsetY:false
     }     
  }
  componentDidMount(){
    setTimeout(()=>{
          this.setState({
            isSwiper:true
          })
    },0)
  }      
  _onScroll(e){
    if(e.nativeEvent.contentOffset.y>100){
      this.setState({
        isOffsetY:true
      })
    }else{
      if(this.state.isOffsetY)
        this.setState({
          isOffsetY:false
        })
    }
    console.log(e.nativeEvent.contentOffset.y);
      
  }
  render() {
    return (
      <View style={styles.container}>
            <Header title="网格社区" />
            {/* <ScrollView scrollEnabled={true} horizontal={false}
             //  onScroll={this._onScroll.bind(this)}
             > 
               <View style={{position:'relative',top:0,zIndex:1}}>
                {this.state.isSwiper?<Swiper/>:null}
                <Grid navigation={this.props.navigation}/>
                <HotNews  navigation={this.props.navigation}/>
              </View>
            </ScrollView> */}
            <Circle style={{width: 100, height: 100}} />
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
