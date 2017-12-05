import React, { Component } from 'react'
import {
  View,
  Image,

  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
     height:height*0.3,
    backgroundColor: 'transparent'
  },
  container: {
      height:height*0.3,
      backgroundColor:'#fff'
  },

  imgBackground: {
    width,
    height:height*0.3,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
     height:height*0.3,
  }
}

export default class extends Component {
  render () {
    return (
      <View style={styles.container}>
      
        {/* <Image
          source={require('./img/bg.jpg')}
          style={styles.imgBackground}
        /> */}
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width:8, height: 8, borderRadius: 4, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 10
          }}
        
          loop={true}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./img/1.jpg')}
              resizeMode='cover'
            />
          </View>
        </Swiper>
      </View>
    )
  }
}