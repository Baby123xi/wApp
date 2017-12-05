import React, { Component } from 'react'
import {
Dimensions,
  View,
  Image,
  Text,
FlatList,
TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('window')
import Header from '../../components/Header'
import Dao from '../../Dao'
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nociceList: []
    }
  }

 renderItem(data){
  let item=data.item;
  return(
      <TouchableOpacity
        activeOpacity={1}
        style={{borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingHorizontal:15,width,height:70,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
        onPress={() => this.props.navigation.navigate("NoticeD",{id: item.id})}>
            <View style={{flex:1,flexDirection:'column'}}>
                 <Text style={{fontSize:16,color:'#222'}}>{item.title}</Text>
                 <Text style={{fontSize:14,color:'#bbb',marginTop:15}}>{item.time}</Text>
            </View>
            {/* <Text style={{fontSize:14,color:item.status==0?'#f00':'#4c8def'}}>{item.status==0?'未完成':'已完成'}</Text> */}
      </TouchableOpacity>
  )
 }
 componentDidMount(){
  fetch('http://121.40.241.28:7070/zhxz/app/newsAction.action?affType=HR')
  .then((response) => response.json())
      .then((responseJson) => {
            console.log(responseJson.data)
          if(responseJson.result == "fail") {
             this.setState({
              nociceList: []
             })
          }else if(responseJson.result=="success"){
             this.setState({
              nociceList: responseJson.data
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
      <View style={{flex:1}}>
            <Header title={"通知公告"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <FlatList
                data={Dao.ToDoList}
                renderItem={(item)=>this.renderItem(item)}
                keyExtractor={(item, index) => item.id}
             />
      </View>
    )
  }
}