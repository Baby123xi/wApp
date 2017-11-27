import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  WebView,
  ScrollView,
  
  TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('window')
import Header from '../../components/Header'
export default class extends Component {
    constructor(props){
        super(props)
        this.state={
          
         
        }
    }


   
  renderItem(){
      let data=[
          {name:'事务类型',value:'教育工作',isType:'text'},
          {name:'紧急程度',value:'常规',valueColor:'#6ca36c',isType:'text'},
          {name:'上报人',value:'习大大',isType:'text'},
          {name:'地点',value:'杭州电子科技大学',isType:'text'},
          {name:'时间',value:'2017-08-06 09:30',isType:'text'},
          {name:'反映人',value:'习大大',isType:'text'},
          {name:'反映人电话',value:'18758716921',isType:'text'},
          {name:'处理前图片',value:require('../../img/1.jpg'),isType:'image'},
          {name:'处理后图片',value:require('../../img/1.jpg'),isType:'image'},
          {name:'备注',value:'请相关部门解决不能用自来水的问题',isType:'textarea'}

      ];
     
      let arr=[];
      data.map((item,index)=>{
         let result=null;
         switch(item.isType){
           case 'text':
           result= <TextInput 
             underlineColorAndroid="#fff"
             selectionColor="#303437"
             style={{flex:1,padding:0,fontSize:16,height:30,color:item.valueColor?item.valueColor:'#303437'}} />;
           break;
           case 'image':
           result=<Image
             style={{height:100}}
             source={item.value}
             resizeMode='cover'
            />
            break;
            case 'textarea':
            result=<View style={{flex:1,padding:5,minHeight:100,borderColor:'#eee',borderWidth:1}}>
                    <Text 
                     style={{fontSize:16,color:'#303437'}}
                     >
                     {item.value}
                     </Text>
             </View>
             break;
         }
         
        arr.push(
         <View key={index} style={{alignItems:'center',marginHorizontal:10,paddingVertical:15,flexDirection:'row',borderBottomColor:'#eee',borderBottomWidth:data.length==(index+1)?0:1}}>
                <Text style={{fontSize:16,color:'#303437'}}>{item.name}：</Text>
                {result}
          </View>
        );
      })
      return arr;
  }
    render(){
     
        return <View style={{width,flex:1}}>
            <Header title={"事件上报"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <ScrollView 
              scrollEnabled={true}
              horizontal={false}
             
             //  onScroll={this._onScroll.bind(this)}
             > 
             <View  style={{flex:1,margin:10,backgroundColor:'#fff',borderRadius:8}}>
                   {this.renderItem()}
                   {/* <TouchableOpacity
                       activeOpacity={1}
                       style={{flex:2,bac}}
                       >
                       <Text>提交</Text>
                   </TouchableOpacity> */}
             </View>
               
             </ScrollView>
        </View>
    }
}