import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
FlatList
} from 'react-native'


import Header from '../../components/Header'
export default class extends Component {

 renderItem(item){
  return(
      <View style={{height:100,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'column'}}>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#222'}}>{item.title}</Text>
                 <Text style={{fontSize:14,color:'#bbb',marginTop:10}}>{item.time}</Text>
            </View>
            <Text style={{fontSize:16,color:item.status==0?'#f00':'#4c8def'}}>{item.status==0?'未完成':'已完成'}</Text>
      </View>
  )
 }
  render(){
    return(
      <View style={{flex:1}}>
            <Header title={"待办事件"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
             />
      </View>
    )
  }
}