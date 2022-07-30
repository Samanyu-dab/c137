import React  from "react";
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen  from "./screens/home";
import DetailsScreen from "./screens/deatails"

export default function App(){
  return <AppContainer/>
}

const appStackNavigator=createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    Details:{
      screen:DetailsScreen,
      navigationOptions:{
        headerShown:false
      }
    }
    },
  {
    initialRouteName:"Home"
  }

)
const AppContainer=createAppContainer()

