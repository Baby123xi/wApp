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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const { width, height } = Dimensions.get('window')

import Header from '../../components/Header'
export default class extends Component {
    constructor(props){
        super(props)
        this.state={
           value: 0
         
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
             style={{flex:1,padding:0,fontSize:16,height:50,color:item.valueColor?item.valueColor:'#303437'}} />;
           break;
           case 'image':
           result=<Text style={{color:"#4c8def"}}>添加</Text>
            break;
            case 'textarea':
            result=<View style={{flex:1,padding:5,minHeight:100}}>
                        <TextInput 
                        underlineColorAndroid="#fff"
                        selectionColor="#303437"
                        style={{borderColor:"#eee",borderWidth:1,flex:1,padding:0,fontSize:16,height:80,color:item.valueColor?item.valueColor:'#303437'}} />
                       
                   </View>
             break;
         }
         
        arr.push(
         <View key={index} style={{alignItems:'center',marginHorizontal:10,minHeight:50,flexDirection:'row',borderBottomColor:'#eee',borderBottomWidth:data.length==(index+1)?0:1}}>
                <Text style={{fontSize:16,color:'#303437'}}>{item.name}：</Text>
                {result}
               
          </View>
        );
      })
      return arr;
  }

   renderContent(){
    
       return(
           <View style={{flex:1}}>
              <View style={{marginTop:10,backgroundColor:'#fff',paddingHorizontal:10,flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:55,borderBottomWidth:1,borderColor:'#eee'}}>
                  <Text style={{fontSize:16, color:'#141514'}}>事件接收人:</Text>
                   <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:16,color:'#bbb'}}>点击选择</Text>
                              
                  </TouchableOpacity>
                  <Image 
                  style={{height:20,width:20,tintColor:'#141514'}}
                  source={require('../../img/leftIcon.png')}/>
              </View>
               <View style={{backgroundColor:'#fff',paddingHorizontal:10,flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:55,borderBottomWidth:1,borderColor:'#eee'}}>
                  <Text style={{fontSize:16, color:'#141514'}}>走访时间:</Text>
                   <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:16,color:'#bbb'}}>点击选择</Text>
                              
                  </TouchableOpacity>
                  <Image 
                  style={{height:20,width:20,tintColor:'#141514'}}
                  source={require('../../img/leftIcon.png')}/>
              </View>
               <View style={{marginTop:10,backgroundColor:'#fff',paddingHorizontal:10,flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:55,borderBottomWidth:1,borderColor:'#eee'}}>
                  <Text style={{fontSize:16, color:'#141514'}}>选择位置:</Text>
                   <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:16,color:'#bbb'}}>点击选择</Text>
                              
                  </TouchableOpacity>
                  <Image 
                  style={{height:20,width:20,tintColor:'#141514'}}
                  source={require('../../img/leftIcon.png')}/>
              </View>
               <View style={{backgroundColor:'#fff',paddingHorizontal:10,flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:55,borderBottomWidth:1,borderColor:'#eee'}}>
                  <Text style={{fontSize:16, color:'#141514'}}>详细地址:</Text>
                   <TextInput 
                       textAlignVertical ='top'
                       placeholder="问题描述"
                        underlineColorAndroid="transparent"
                        selectionColor="#303437"
                        multiline ={true}
                        style={{border:0,backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:5,flex:1,padding:0,fontSize:16,color:'#303437'}} />
                      
              </View>
              <View  style={{padding:10,marginVertical:10,alignItems:'center',minHeight:50,flexDirection:'column',borderColor:'#bbb',borderBottomWidth:1}}>
                   <Text style={{fontSize:16, color:'#141514'}}>事件类型</Text>
                 
                    <View style={{marginTop:10,paddingHorizontal:20,flex:1,flexDirection:'row'}}>
                         <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,backgroundColor:'#4c8def',width:100,borderRadius:5,borderWidth:1,borderColor:'#bbb',height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:14,color:'#fff'}}>社会矛盾排查</Text>
                          </TouchableOpacity>
                            <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,backgroundColor:'#eee',width:100,borderRadius:5,height:38,borderWidth:1,borderColor:'#bbbbbb',alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:14,color:'#333'}}>重点人员管理</Text>
                          </TouchableOpacity>
                    </View>
                 </View>
                  <View  style={{padding:10,marginVertical:10,alignItems:'center',minHeight:50,flexDirection:'column',borderColor:'#bbb',borderBottomWidth:1}}>
                   <Text style={{fontSize:16, color:'#141514'}}>紧急程度</Text>
                 
                    <View style={{marginTop:10,flex:1,flexDirection:'row'}}>
                         <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,width:100,backgroundColor:'#eee',borderRadius:5,borderWidth:1,borderColor:'#bbbbbb',height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:14,color:'#333'}}>一般</Text>
                          </TouchableOpacity>
                            <TouchableOpacity
                           activeOpacity={1}
                           style={{marginHorizontal:10,width:100,borderRadius:5,backgroundColor:'#4c8def',height:38,alignItems:'center',justifyContent:'center'}}
                           >
                              <Text style={{fontSize:14,color:'#fff'}}>紧急</Text>
                          </TouchableOpacity>
                    </View>
                 </View>

                 <View  style={{padding:10,marginVertical:10,alignItems:'center',minHeight:50,flexDirection:'column',borderColor:'#bbbbbb',borderBottomWidth:1}}>
                   <Text style={{fontSize:16, color:'#141514'}}>问题描述</Text>
                 
                    <View style={{marginTop:10,flex:1,flexDirection:'row'}}>
                       <TextInput 
                       textAlignVertical ='top'
                       placeholder="问题描述"
                        underlineColorAndroid="transparent"
                        selectionColor="#303437"
                        multiline ={true}
                        style={{backgroundColor:'#fff',borderRadius:5,paddingVertical:5,paddingHorizontal:5,width:'90%',borderColor:"#bbb",borderWidth:1,padding:0,fontSize:16,minHeight:120,color:'#303437'}} />
                      
                    </View>
                 </View>
                   <View  style={{padding:10,marginVertical:10,alignItems:'center',minHeight:50,flexDirection:'column'}}>
                   <Text style={{fontSize:16, color:'#141514'}}>图片上传</Text>
                 
                    <TouchableOpacity
                      activeOpacity={1}
                     style={{justifyContent:'center',alignItems:'center',borderRadius:5,height:80,width:120,borderColor:'#bbb',borderWidth:1,marginTop:10,flex:1,flexDirection:'row'}}>
                    
                        <Image
                         style={{height:40,width:40,tintColor:'#bbb'}}
                        source={require('../../img/add.png')}/>
                    </TouchableOpacity>
                 </View>
           </View>
       )
   }
    render(){
     
        return <View style={{width,flex:1,backgroundColor:'#f9f8f7'}}>
            <Header title={"事件上报"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <ScrollView 
              scrollEnabled={true}
              horizontal={false}
             style={{flex:1}}
             //  onScroll={this._onScroll.bind(this)}
             > 
             <View  style={{flex:1,borderRadius:8}}>
                 {this.renderContent()}
                   <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
                       
                   </View>
             </View>
               
             </ScrollView>
              <TouchableOpacity
                        activeOpacity={1}
                        style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#4c8def',paddingVertical:12}}
                        >
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>提 交</Text>
             </TouchableOpacity> 
        </View>
    }
}