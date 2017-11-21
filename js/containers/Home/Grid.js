import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window')
let itemSize=(width)*0.25;


const styles = {
  grid:{
    paddingVertical:10,
    backgroundColor:"#fff",
    justifyContent:'space-between', 
   alignItems:'center',
   flexWrap:'wrap',
   width,
   flexDirection:'row'},
   item:{
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   width: itemSize,
   height:width*0.23,
  //  borderRightWidth:1,
  //  borderBottomWidth:1,
  //  borderColor:'#e6e6e6'
},
   itemName:{
     paddingVertical:5,
     fontSize:13,
     color:'#222'
   }

};
import Url from   '../../api/pageConfig'
export default class Grid extends Component<{}> {
     constructor(props) {
       super(props)
       this.state={
           imgList:[]        
       } 
    }
  componentDidMount(){
 
        this.setState({
        imgList:[
     
        {imgUrl:require('./img/icon_home2_03.png'),name:'待办事件',url:Url.WaitEvent},
        {imgUrl:require('./img/icon_home3_03.png'),name:'事件上报',url:Url.IncidentManagement},
       {imgUrl:require('./img/icon_home5_03.png'),name:'日程安排',url:Url.BaseUrl},
        {imgUrl:require('./img/icon_home1_03.png'),name:'通知公告',url:Url.Notice},
        
        {imgUrl:require('./img/icon_home6_03.png'),name:'工作日志',url:Url.BaseUrl},
        {imgUrl:require('./img/icon_home7_02.png'),name:'人员定位',url:Url.BaseUrl},
         {imgUrl:require('./img/icon_home9_02.png'),name:'任务管理',url:Url.BaseUrl},
        {imgUrl:require('./img/icon_home8_02.png'),name:'新闻资讯',url:Url.BaseUrl},
      //  {imgUrl:require('./img/icon_home9_02.png'),name:''}
    ]
      }) 
   
  }
  render() {
    return (
       <View style={styles.grid}>
          {this.state.imgList.map((item,index)=>{
            return <TouchableOpacity style={styles.item} key={index}
               onPress={() => this.props.navigation.navigate('SubPage', {url: item.url})}
            >
                <Image source={item.imgUrl}
                 resizeMode='contain'
                 style={{width:45, height:45}} />
                <Text style={styles.itemName}>{item.name}</Text>
             </TouchableOpacity>
          })}
       </View>
    );
  }
}
