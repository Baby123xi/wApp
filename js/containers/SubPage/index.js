import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
  Dimensions,
  WebView
} from 'react-native'

const { width, height } = Dimensions.get('window')
import Header from '../../components/Header'
export default class extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.navigation);
        return <View style={{width,flex:1}}>
            <Header title={"待办事件"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <WebView
            source={{uri:this.props.navigation.state.params.url}}
            style={{width}}
            startInLoadingState={true} 
            renderLoading={()=>{
                return  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18}}>Loading...</Text>
                </View>
            }}
            />
        </View>
    }
}