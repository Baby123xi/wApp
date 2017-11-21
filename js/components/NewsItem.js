import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    newsItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:100,
        backgroundColor:'#fff',
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderColor:'#ededed'   
    },
    newsImg:{
       height:80,
       width:100
    },
    newsText:{
        paddingLeft:8,
        height:80,
       flex:1,
       flexDirection:'column',
     
       justifyContent:'space-between',
      
    },
    newsTitle:{
        fontSize:16,
        color:'#000'
    },
    newsInfo:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
})
export default class extends Component {
     constructor(props) {
       super(props)
    }
  renderItem_1(){
      return (
      <View style={{paddingHorizontal:15,backgroundColor:'#fff', borderBottomWidth:1,
        borderColor:'#ededed'}}>
                <Image
                  style={{height:150}}
                  source={{ uri:this.props.news.img }}
                  resizeMode='cover'
                />
                <View style={{height:90,paddingVertical:5,flexDirection:'column',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,color:'#000'}}>{this.props.news.title}</Text>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>来源：{this.props.news.from}</Text>
                        <Text>{this.props.news.time}</Text>
                    </View>
                </View>
            </View>
      )
  }
  renderItem_2(){
      return (
          <View style={styles.newsItem}>
            <Image
              style={styles.newsImg}
              source={{ uri:this.props.news.img }}
              resizeMode='cover'
            />
            <View style={styles.newsText}>
                 <Text   style={styles.newsTitle}>{this.props.news.title}</Text>
                 <View style={styles.newsInfo}>
                     <Text>来源：{this.props.news.from}</Text>
                     <Text>{this.props.news.time}</Text>
                 </View>
            </View>
          </View>
      )
  }
  render(){
      return(
          this.props.index==0?this.renderItem_1():this.renderItem_2()
      )
  }
}