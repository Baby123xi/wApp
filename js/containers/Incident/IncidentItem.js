import React from 'react'
import {

  View,
  Image,
  Text,
 TouchableOpacity,
  Dimensions
} from 'react-native'
const { width, height } = Dimensions.get('window')
 function selectStatus  (status){
    let strObj={};
    switch(status){
      case -1:
       strObj= {color:'#dd524d',str:'待处理'};break;
      case 0 :
       strObj= {color:'#efad4d',str:'处理中'};break;
        case 1:
        strObj= {color:'#4cda64',str:'已处理'};break;
       default:
       strObj= {color:'#dd524d',str:'待处理'};break;
    }
      return strObj;
  }
function IncidentItem(props){
  

  let item=props.item.item;
  let obj=selectStatus(item.status);
  let itemColor=obj.color;
  let itemStr=obj.str;
  console.log(item);
  return(
      <TouchableOpacity
        activeOpacity={1}
        style={{borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingHorizontal:15,width,height:95,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
        onPress={() =>props.navigation.navigate("IncidentD",{id: item.id})}>
            <View style={{marginRight:5,flex:1,flexDirection:'column'}}>
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{fontSize:16,color:'#222'}}>{item.title}</Text>
                 <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row',marginTop:5}}>
                            <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193'}}>反映人：张三</Text>
                            <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193',marginLeft:8}}>地点：路杭州电子科技大学</Text>   
                      </View> 
                      <View style={{flexDirection:'row',marginTop:5}}>
                          <Text ellipsizeMode='tail' style={{fontSize:14,color:'#919193'}}>反映时间：2017-08-06</Text> 
                          <Text ellipsizeMode='tail' style={{fontSize:14,marginLeft:8,color:itemColor}}>{itemStr}</Text>  
                      </View>
                 </View>
            </View>
           <Image style={{borderRadius:10,height:60,width:60,backgroundColor:'#000'}} source={{uri:'https://facebook.github.io/react-native/img/header_logo.png'}}/>
      </TouchableOpacity>
  )
 }



export default IncidentItem;