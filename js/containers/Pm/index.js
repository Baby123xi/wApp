import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';


import Header from '../../components/Header'

import {MapView,Marker,Polyline} from 'react-native-amap3d'
export default class Home extends Component<{}> {
 static navigationOptions = {
    title: '人员管理',
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/pm.png')}
        style={[{height:28,width:28}, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
     super(props)
     this.state={
       isSwiper:false
     }     
  }
  componentDidMount(){
    setTimeout(()=>{
          this.setState({
            isSwiper:true
          })
    },0)
  }      
  render() {
      let mapData=[
            { latitude:  30.284404,longitude:120.138257,title:"张浩",description:"劳动模范"},
            { latitude:  30.283404,longitude:120.139257,title:"李明",description:"残疾人"},
            { latitude:  30.282404,longitude:120.136257,title:"王庆",description:"高龄老人"},
            { latitude:  30.281404,longitude:120.135257,title:"吴小强",description:"退休人员"},
                  
        ]
    return (
      <View style={styles.container}>
            <Header title="人员管理"/>
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
                        active={true}
                        clickable={true}
                       // onPress={() => this.props.navigation.navigate("IncidentD",{id:index})}
                        title={item.title}
                        color='red'
                        description={item.description}
                        coordinate={{
                            latitude:item.latitude,
                            longitude:item.longitude,
                        }}
                      
                       // icon={()=><Image
                         //     source={require('./img/at.png')}
                           //   style={{height:35,width:35}}
                            ///>
                           // }
                    />
                })} 

                
             
         </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  
    backgroundColor: '#ededed',
  }
});
