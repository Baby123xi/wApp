import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
   TextInput,
   TouchableOpacity
} from 'react-native'

import Header from '../../components/Header'
export default class extends Component {
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#fff'}}>
          <Header title={"登录"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
             <View style={{flex:1,alignItems:'center',marginTop:20}}>
                <View style={{marginVertical:10,paddingHorizontal:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                 {/* <Text style={{fontSize:16,color:"#000"}}>用户名：</Text> */}
                  <TextInput 
                    placeholder="请输入用户名"
                    underlineColorAndroid="transparent"
                    selectionColor="#303437"
                    style={{paddingLeft:5,borderRadius:5,borderColor:"#eee",borderWidth:1,flex:1,padding:0,fontSize:16,height:50,color:'#303437'}} />
                </View>
                 <View style={{marginVertical:10,paddingHorizontal:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                 {/* <Text style={{fontSize:16,color:"#000"}}>用户名：</Text> */}
                  <TextInput 
                    secureTextEntry={true}
                    placeholder="请输入密码"
                    underlineColorAndroid="transparent"
                    selectionColor="#303437"
                    style={{paddingLeft:5,borderRadius:5,borderColor:"#eee",borderWidth:1,flex:1,padding:0,fontSize:16,height:50,color:'#303437'}} />
                </View>
                 <View style={{marginVertical:15,justifyContent:'center',alignItems:'center',paddingHorizontal:20,flexDirection:'row'}}>
                            <TouchableOpacity
                        activeOpacity={1}
                        style={{borderRadius:15,justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#4c8def',paddingVertical:12}}
                        >
                        <Text style={{color:'#fff',fontSize:16}}>登录</Text>
                            </TouchableOpacity> 
                        
                   </View>
            </View>
      </View>
    )
  }
}