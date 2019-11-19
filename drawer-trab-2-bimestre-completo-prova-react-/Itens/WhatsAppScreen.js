import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,TextInput} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import SearchScreen from '../Components/SearchScreen';
import {Ionicons,Entypo} from '@expo/vector-icons'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

const Mytabs = createMaterialTopTabNavigator(
  {
    conversas:SearchScreen,
    status:SearchScreen,
    chamadas:SearchScreen
  },
  {
    tabBarOptions:{
      style:{
        backgroundColor:'#047a6c'
      }
    }
  }
)


const mysatck = createStackNavigator({
  home:Mytabs
},{
  defaultNavigationOptions:{
    title:'whatsApp',
    headerStyle: {
      backgroundColor: '#047a6c',
      elevation:0,
      shadowOpacity:0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight:(
      <View style={{flexDirection:'row',padding:20}}>
        <Ionicons name="md-search" size={32} color="white" />
        <Entypo name="dots-three-vertical" size={23} color="white" style={{marginLeft:10}} />
      </View>
    )
  }

})

export default createAppContainer(mysatck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',

  },
  mycard:{
    marginBottom:10,
    elevation:4
  }
});
