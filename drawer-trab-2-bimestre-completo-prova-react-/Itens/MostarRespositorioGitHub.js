import * as React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import axios from 'react-native-axios'
import { Card, CardItem, Button, Icon, Left, Right, Body } from 'native-base';

export default class App extends React.Component {
  state = { dados: [] };
  
  componentDidMount(){
      this.receberDados()
  }
  
  receberDados = async() => {
      let retorno = await axios.get("https://api.github.com/users/rodescobar/repos")
      this.setState( {dados: retorno.data} )
  }

  render() {
    return (
     <ScrollView>
      <View>
          <Card>
            <CardItem>
              <Text style={styles.text}> Repositorio GitHub </Text>
            </CardItem>
          </Card>
      </View>
        {this.state.dados.slice(0, 25).map( (linha, key) => {
          return (
            <Card key = {key} >   

              <CardItem>
                <Text> Nome: {linha.name} </Text>                
              </CardItem>
              
            </Card>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
})