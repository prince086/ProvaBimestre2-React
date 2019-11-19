import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Card, CardItem, Button, Icon, Left, Right, Body } from 'native-base';

const base = require('../Components/dados.json');

class App extends React.Component {
  state = { dados: [] };
  
  componentDidMount(){
      this.receberDados()
  }
  
  receberDados = async() => {
      let retorno = await axios.get("https://jsonplaceholder.typicode.com/photos")
      this.setState( {dados: retorno.data} )
  }
  
  render() {
    return (
      <ScrollView>
        {this.state.dados.slice(0, 25).map( (linha, key) => {
          return (
            <Card key = {key} >
              <CardItem>
                <Text> {linha.title} </Text>
              </CardItem>
              <CardItem>
                <Image
                  source = {{ uri: linha.thumbnailUrl }}
                  style = {{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    );
  }
}

export default App;
