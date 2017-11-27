import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
 
} from 'react-native';
import NewsItem from '../../components/NewsItem'
const styles = StyleSheet.create({
    hotbox: {
        marginTop: 10,
        //  backgroundColor:'#fff',

    },
    topHeader: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
  
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    title: {
        paddingLeft:10,
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: '#000',
        borderLeftWidth:3,
        borderColor:'#f00'
    },
    more: {
        fontSize: 14
    }
})
let newsList = [
    { "title": '习近平和夫人在故宫迎接美国总统特朗普夫妇', "time": '2017-08-09', "from": '新浪',img:'http://n.sinaimg.cn/news/20171108/gjpx-fynmzun0927618.jpg' },
    { "title": '美国总统特朗普结束在韩国访问 启程来华(图)', "time": '2017-08-09', "from": '新浪' ,img:'http://n.sinaimg.cn/sports/20171108/OvtD-fynmzrs7943787.jpg'},
    { "title": '谭维维马甲线明显纹身超霸气', "time": '2017-08-09', "from": '新浪',img:'http://n.sinaimg.cn/sports/20171108/GSMk-fynnnsc9306611.jpg' },
    { "title": '美国总统特朗普结束在韩国访问 启程来华(图)', "time": '2017-08-09', "from": '新浪',img:'http://n.sinaimg.cn/sports/20171108/ONLo-fynmzrs7905513.jpg' }
]
export default class HotNews extends Component<{}> {
    constructor(props){
        super(props)
    }
    render() {
       
        return <View style={styles.hotbox}>
            <View style={styles.topHeader}>
                <Text style={styles.title}>热点新闻</Text>
                <Text style={styles.more}
                onPress={() => this.props.navigation.navigate("NewsD",{id: this.props.news.id})}>更多</Text>
            </View>
         
            {
                newsList.map((item, index) => <NewsItem key={index}   news={item} index={index}  navigation={this.props.navigation}/>)

            }

        </View>
    }
}