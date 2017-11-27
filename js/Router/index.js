import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../containers/Home'
import Pm from '../containers/Pm'
import My from '../containers/My'


import Notice from '../containers/Notice/Notice'
import NoticeD from '../containers/Notice/NoticeD'
import Incident from '../containers/Incident/Incident'
import IncidentD from '../containers/Incident/IncidentD'
import IncidentPost from '../containers/Incident/IncidentPost'
import Scheduling from '../containers/Scheduling/Scheduling'
import SchedulingD from '../containers/Scheduling/SchedulingD'
import News from '../containers/News/News'
import NewsD from '../containers/News/NewsD'
import Visit from '../containers/Visit/Visit'

const TabLayout = TabNavigator({
  Home: { screen: Home },
  Pm: { screen: Pm },
  My: { screen: My }
  
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    // initialRouteName: "Home",
    swipeEnabled: false,

    animationEnabled: false,
    tabBarOptions: {
      tabStyle: {
        backgroundColor: "#fafafafa"
      },
      style: {
        height: 50
       
      },
      showIcon: true,
      indicatorStyle: { height: 0 },

      //activeBackgroundColor:"#3791e9",
        activeTintColor:"#3791e9",
    }
  });
const Router = StackNavigator({
  Layout: {
    screen: TabLayout
  },
  Notice:{
    screen: Notice  
 },
  NoticeD:{
  screen: NoticeD  
  },

  Incident:{
  screen: Incident  
  },  IncidentD:{
  screen: IncidentD  
  },

  
   IncidentPost:{
    screen: IncidentPost  
    },
    Scheduling:{
      screen: Scheduling  
  },
  SchedulingD:{
    screen: SchedulingD  
},
News:{
  screen: News  
},
NewsD:{
  screen: NewsD  
},
Visit:{
  screen: Visit  
}

}, {
    navigationOptions: {
      header: null,
      gesturesEnabled: true
    }
  }
);


export default Router
