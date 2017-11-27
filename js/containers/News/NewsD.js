import React, { Component } from 'react'
import {

  View,
  Image,
  Text

} from 'react-native'

import Header from '../../components/Header'
export default class extends Component {
  constructor(props){
      super(props)
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#fff'}}>
         <Header title={"详情"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
         {/* <Text>state: {this.props.navigation.state.params.id}</Text> */}
         <View style={{paddingVertical:10,paddingHorizontal:10,borderBottomWidth:1,borderColor:'#eee'}}>
             <Text style={{lineHeight:30,fontSize:16,color:'#222'}}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>
             <Text style={{marginTop:15,fontSize:14,color:'#bbb'}}>2017-08-06</Text>
         </View>
         {/* <Text style={{marginTop:10,textAlign:'center',fontSize:18}}>详情内容</Text> */}
         <Text style={{marginTop:10,fontSize:16,color:'#222',paddingHorizontal:10,textAlign:'left'}}>作为香港最传奇的男星之一，81岁高龄的谢贤，提起他，人们的第一反应就是谢霆锋的老爸。知道他的人也了解他的火爆脾气。虽然81岁了但仍旧保养得很好，照样交女朋友，性格脾气也是年轻时模样。
　　最近谢贤参与一档亲子真人秀节目《宝贝的新朋友》，节目已经播出四期了，不过在最近曝光的第五期节目预告片中看到，谢贤就上演了让人惊讶的一幕，面对不听话的“孙子”直接出脚踢屁股，看呆一旁的老戏骨张双利。
　　预告的节目中显示谢贤7岁的“孙子”李庆誉在录制节目的过程中一直不吃东西;谢贤一开始还非常耐心地给“孙子”喂东西，但李庆誉一点不领情，还很不耐烦地说：“今天一天到晚都是吃吃吃吃，吃货呀”。</Text>
      </View>
    )
  }
}