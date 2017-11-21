import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


import Header from '../../components/Header'


export default class Home extends Component<{}> {
renderItem(item,index){
  return <View key={index} style={{borderBottomWidth:1,borderColor:'#eee',paddingVertical:10,paddingHorizontal:10,height:50,backgroundColor:"#fff",flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image  
                source={item.icon}
                style={{height:30,width:30,tintColor:"#4c8def"}}
                />
                <Text style={{marginLeft:15,fontSize:16,color:'#222'}}>{item.name}</Text>   
          </View> 
           <Image  
                source={require('./img/rightIcon.png')}
                style={{height:25,width:25,tintColor:"#4c8def"}}
            />  
  </View>
}
render(){
     let itemList=[
       {name:"分享",icon:require('./img/share.png')},
       {name:"关于我们",icon:require('./img/about.png')}
     ]
     return (
       <View style={{flex:1,marginTop:15}}>
         {
           itemList.map((item,index)=>{
               return  this.renderItem(item,index)
           })
         }
      </View>
    )
}
   
}