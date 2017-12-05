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
import IncidentItem from  './IncidentItem'
const { width, height } = Dimensions.get('window')
export default class extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  renderCount(arrThings){
    // let items=[
    //   {name:'待处理',number:10,bg:'#dd524d'},
    //   {name:'处理中',number:0,bg:'#efad4d'},
    //   {name:'已处理',number:100,bg:'#4cda64'}

    // ]
    let items= arrThings
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
  componentDidMount(){
    fetch('http://121.40.241.28:7070/zhxz/app/newsAction.action?affType=HR')
    .then((response) => response.json())
        .then((responseJson) => {
              console.log(responseJson.data)
            if(responseJson.result == "fail") {
               this.setState({
                 data: []
               })
            }else if(responseJson.result=="success"){
               this.setState({
               data:responseJson.data
            })
            //       responseJson.data.map((item,index)=>{
            //     console.log(item);
            //      this.titles.push(item.lpName);
            //      this.imgs=
            //      this.setState({
            //          isSwiper:true
            //      })
            
               
            //   })} 
            }
        })
  }
 
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eee'}}>
            <Header title={"事件管理"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            {this.renderCount(this.state.data)}
            <FlatList
                data={Dao.ToDoList}
                renderItem={(item)=><IncidentItem item={item}  navigation={this.props.navigation}/>}
                keyExtractor={(item, index) => item.id}
             />
      </View>
    )
  }
}