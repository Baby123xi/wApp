import React, { Component } from 'react'
import {

  View,
  Image,
  Text,
  Dimensions,
  WebView,
  TextInput,
  TouchableOpacity,
  NativeModules
} from 'react-native'

const { width, height } = Dimensions.get('window')
import Header from '../../components/Header'
import {MapView,Marker,Polyline} from 'react-native-amap3d'

export default class extends Component {
    constructor(props){
        super(props)
        this.state={
          
            canGoBack: false,
            text:''
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
        let mapData=[
            { latitude:  30.284404,longitude:120.138257,title:"1",description:""},
            { latitude:  30.283404,longitude:120.139257,title:"2",description:""},
            { latitude:  30.282404,longitude:120.136257,title:"3",description:""},
            { latitude:  30.281404,longitude:120.135257,title:"4",description:""},
                  
        ]
        return <View style={{width,flex:1,backgroundColor:'#fff'}}>
            <Header title={"走访轨迹"} isSub={true} leftBtnAction={()=>this.props.navigation.goBack()}/>
            {/* <WebView
            ref={'WEBVIEW_REF'}
            source={{uri:'http://192.168.2.102:8888/map.html'}}//
            style={{width}}
          //  startInLoadingState={true} 
           // onNavigationStateChange={(e)=>this._onNavigationStateChange(e)}
           // renderLoading={()=>{
            //    return  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            //         <Text style={{fontSize:18}}>Loading...</Text>
            //    </View>
          //  }}
            /> */}
            <View style={{paddingHorizontal:10,marginVertical:5,height:50,flexDirection:'row'}}>
              <TextInput
                placeholder="请输入网格员编号"
                underlineColorAndroid ='transparent'
                style={{flex:1,height: 40, borderColor: '#bbb', borderWidth: 1, borderRadius:5}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ borderRadius:5,marginLeft:10,alignItems:'center',justifyContent:'center',width:60,height:40,backgroundColor:'#4c8def'}}
                    >
                    <Text style={{color:'#fff'}}>查询</Text>
                </TouchableOpacity>
            </View>
            <MapView 
            style={{flex:1}}
          
            coordinate={{
                latitude:  30.282404,
                longitude:120.136257,
             }}
           zoomLevel={17}
           tilt={45}
           showsIndoorMap
                >
          
           
                {mapData.map((item,index)=>{
                  return <Marker
                      key={index}
                        active
                        clickable={true}
                        onPress={() => this.props.navigation.navigate("IncidentD",{id:index})}
                        title={item.title}
                        color='red'
                        description={item.description}
                        coordinate={{
                            latitude:item.latitude,
                            longitude:item.longitude,
                        }}
                    />
                })} 

                
             <Polyline
                    width={6}
                    color='rgba(255, 0, 0, 0.5)'
                    coordinates={mapData}
               /> 
           </MapView>
            {/* <View style={{flex:1}}>
            <Text 
            onPress={()=>{
                NativeModules.MapPackage.startActivityFromReactNative('com.wapp.MapActivity',"12345666")            }}
            >打开原生页面</Text>

              
            </View> */}
        </View>
    }
}