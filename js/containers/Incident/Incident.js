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
import Dao from '../../Dao'
const { width, height } = Dimensions.get('window')
export default class extends Component {
  renderCount(){
    let items=[
      {name:'待处理',number:10,bg:'#dd524d'},
      {name:'处理中',number:0,bg:'#efad4d'},
      {name:'已处理',number:100,bg:'#4cda64'}

    ]
      return(
           <View style={{height:55,flexDirection:'row',alignItems:'center'}}>
                {items.map((item,index)=>{
                    return (
                    <View key={index} style={{borderRadius:8,marginHorizontal:5,paddingHorizontal:5,height:38,flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:item.bg}}>
                          <Text style={{fontSize:14,color:'#fff'}}>{item.name}</Text>
                          <View style={{alignItems:'center',justifyContent:'center',marginLeft:5,minHeight:20,minWidth:20,backgroundColor:'rgba(0,0,0,0.2)',paddingHorizontal:5,borderRadius:10}}>
                              <Text style={{fontSize:12,color:'#fff',textAlign:'center'}}>{item.number}</Text>
                          </View>
                    </View>
                    )
                })}
           </View>
      )
  }
 renderItem(data){
  let item=data.item;
  return(
      <TouchableOpacity
        activeOpacity={1}
        style={{borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingHorizontal:15,width,height:95,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
        onPress={() => this.props.navigation.navigate("ToDoDetails",{id: item.id})}>
            <View style={{marginRight:5,flex:1,flexDirection:'column'}}>
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{fontSize:16,color:'#222'}}>{item.title}dsadsadasdasdasdsadsadsadasdas</Text>
                 <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row',marginTop:5}}>
                            <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193'}}>反映人：张三</Text>
                            <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193',marginLeft:8}}>地点：路杭州电子科技大学</Text>   
                      </View> 
                      <View style={{flexDirection:'row',marginTop:5}}>
                          <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193'}}>反映时间：2017-08-06</Text> 
                          <Text ellipsizeMode='tail' style={{fontSize:14,marginLeft:8,color:item.status==0?'#f00':'#4c8def'}}>未处理</Text>  
                      </View>
                 </View>
            </View>
           <Image style={{borderRadius:10,height:60,width:60,backgroundColor:'#000'}} source={{uri:'https://facebook.github.io/react-native/img/header_logo.png'}}/>
      </TouchableOpacity>
  )
 }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eee'}}>
            <Header title={"事务管理"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
          
            <FlatList
                data={Dao.ToDoList}
                ListHeaderComponent={this.renderCount()}
                renderItem={(item)=>this.renderItem(item)}
                keyExtractor={(item, index) => item.id}
             />
      </View>
    )
  }
}