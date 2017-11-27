import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Header from '../../components/Header'
import NewsItem from '../../components/NewsItem'
import Dao from '../../Dao'
import Swiper from '../../components/Swiper'
const { width, height } = Dimensions.get('window')
export default class extends Component {
  renderCount(){

      return(
         <Swiper/>
      )
  }
 renderItem(data){
  let item=data.item;
  return(
    <NewsItem isNewList={true}  news={item} index={1} navigation={this.props.navigation}/>
  )
 }
  render(){
    
    return(
      <View style={{flex:1,backgroundColor:'#eee'}}>
            <Header title={"热点新闻"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
          
            <FlatList
                data={Dao.NewsList}
                ListHeaderComponent={this.renderCount()}
                renderItem={(item)=>this.renderItem(item)}
                keyExtractor={(item, index) => item.id}
             />
      </View>
    )
  }
}