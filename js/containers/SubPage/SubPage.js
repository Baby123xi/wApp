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
        this.state={
          
            canGoBack: false
        }
    }


    _onNavigationStateChange(e){
        // if(e.canGoBack){
          this.setState({
            canGoBack: e.canGoBack,
          
           });
      //  }
    }
     _leftBtnAction(){
        if(!this.state.canGoBack){
            this.props.navigation.goBack()
        }else{
            this.refs.WEBVIEW_REF.goBack();
        }
    }
    render(){
     
        return <View style={{width,flex:1}}>
            <Header title={"待办事件"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            <WebView
            ref={'WEBVIEW_REF'}
            source={{uri:'http://192.168.2.104:8080/#/home'}}
            style={{width}}
            startInLoadingState={true} 
           // onNavigationStateChange={(e)=>this._onNavigationStateChange(e)}
            renderLoading={()=>{
                return  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18}}>Loading...</Text>
                </View>
            }}
            />
        </View>
    }
}