import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../containers/Home'
import Pm from '../containers/Pm'
import My from '../containers/My'
import SubPage from '../containers/SubPage'

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
  SubPage:{
  screen: SubPage  
  }


}, {
    navigationOptions: {
      header: null,
      gesturesEnabled: true
    }
  }
);


export default Router
