import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyATrKuSXSN7OtXPVKOziycxENQdUIYyUz0';

const { height, width } = Dimensions.get('window');

class App extends React.Component {
  state = {
    origem: 'Bauru',
    destino: 'São Paulo',
    localOrigem: { latitude: 42.3616132, longitude: -71.0672576 },
    localDestino: { latitude: 42.3616132, longitude: -71.0672576 },
  };

  procurar = () => {
    this.buscarGoogle();
  };

  buscarGoogle() {
    Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key
    if (this.state.origem != '') {
      Geocoder.from(this.state.origem)
        .then(json => {
          var location = json.results[0].geometry.location;

          this.setState({
            localOrigem: {
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 1.5,
              longitudeDelta: 1.5,
            },
          });

          //  console.log(this.state.local)
        })
        .catch(error => console.warn(error));
    }

    if (this.state.destino != '') {
      Geocoder.from(this.state.destino)
        .then(json => {
          var location = json.results[0].geometry.location;

          this.setState({
            localDestino: { latitude: location.lat, longitude: location.lng },
          });
        })
        .catch(error => console.warn(error));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.localOrigem}>

          <MapView.Marker style = {styles.locationText}
            title={this.state.origem}
            coordinate={this.state.localOrigem}> 

              <View>
                <Text style = {styles.locationBorder}> 
                  {this.state.distance + ' km'}
                </Text>
                <Text style = {styles.locationBorder}> 
                  {this.state.duration + ' min'}
                </Text>
              </View> 

          </MapView.Marker>

          <MapView.Marker 
            title={this.state.destino}
            coordinate={this.state.localDestino}
          />

          <MapViewDirections
            origin={this.state.origem}
            destination={this.state.destino}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="red"
            
            onReady={
              result => {
                this.setState({distance: Math.floor(result.distance)})
                this.setState({duration: Math.floor(result.duration)})
              }
            }
          />
        </MapView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={origem => this.setState({ origem: origem })}
            placeholder="Origem"
            value_origem={this.state.origem}
          />
          <TextInput
            style={styles.input}
            onChangeText={destino => this.setState({ destino: destino })}
            placeholder="Destino"
            value_destino={this.state.destino}
          />
          <TouchableOpacity style={styles.button} onPress={this.procurar}>
            <Text style={styles.buttonText}>Buscar rota</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    width: width - 100,
    height: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    maxHeight: 200,
    top: -1 * height + 270,
  },
  input: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
  }, 
  locationText: {
    color: '#fff',
    fontSize: 12
  },
  locationBorder: {   
    fontWeight: 'bold',
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#FFF',
    textAlign: 'center'
  }
});
