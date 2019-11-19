import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { Avatar, Card, Title, Paragraph,Button } from 'react-native-paper';
import Mycard from './Mycard';

export default class  SearchScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'search',
      }
      render(){
          return (
               <View>
                   <ScrollView>
                    <Mycard name="Carla" />
                    <Mycard name="Solange"/>
                    <Mycard name="Fernanda"/>
                    <Mycard name="Mônica"/>
                    <Mycard name="Jaqueline"/>
                   </ScrollView>
               </View>
            );
        
      }
    }
