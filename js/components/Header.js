import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Header extends Component<{}> {
  constructor(props){
    super(props)
  }
   render(){
       return(
           <View style={styles.container}>
               <StatusBar
                    backgroundColor="#4c8def"
                    barStyle="light-content"
                />
              {this.props.isSub?<TouchableOpacity
              onPress={this.props.leftBtnAction}
              style={{width:45,height:45,justifyContent:'center'}}
              >
              <Image
                  style={{height:30,width:30}}
                  source={require('./img/xleftIcon.png')}
               />
              </TouchableOpacity>:null}
               {this.props.title!=''?<Text 
                style={{"fontSize":18,color:'#fff',position:'absolute',width,paddingHorizontal:50,textAlign:'center'}}
                >{this.props.title}
                </Text>:null}
               
           </View>
       )
   }
}

const styles = StyleSheet.create({
    container:{
        width,
        height:50,
        position:'relative',
        zIndex:99,
        backgroundColor:'#4c8def',
        flexDirection:'row',
        alignItems:'center',
       
        shadowOffset:{ width:2, height:2 }, 
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:1,
        paddingHorizontal:5
        
   }
})