import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//import Constants from 'expo-constants';

export default class Calculadora extends React.Component {

 state ={
   valor1:""
 }

 apertei = (valor) => {

  if(valor === "=")
    this.setState({
      valor1:eval(this.state.valor1)
    })
  else{
      this.setState({
      valor1: this.state.valor1 + valor
    })  

    if(valor === "AC")
      this.setState({
        valor1: ""
    })
  }
 }


 render() {
   return (
     <View style={styles.container}>

       <View style={styles.container2}>
           <Text style={{color: 'white'}}>  </Text>
       </View>

       <View style={styles.container2_1}>
           <Text style={{color: 'white', fontSize:24}}>
             {this.state.valor1} 
           </Text>
       </View>

           <View style={styles.container3}>

             <View style={{flexDirection: 'row', flex: 1}}>
               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={()=> this.apertei("AC")}                
               >
                 <Text style={styles.headline,{fontSize: 30}}> AC </Text>                              
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}>
                 <Text style={styles.headline,{fontSize: 30}}> +/- </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("%")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> % </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoLaranja}
                  onPress ={() => this.apertei("/")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> / </Text>
               </TouchableOpacity>
             </View>


             <View style={{flexDirection: 'row', flex: 1}}>
               <TouchableOpacity style={styles.botaoCinza}
                 onPress ={() => this.apertei("1")}               
               >
                 <Text style={styles.headline,{fontSize: 30}}> 1 </Text>                              
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("2")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 2 </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("3")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 3 </Text> 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoLaranja}
                  onPress ={() => this.apertei("-")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> - </Text> 
               </TouchableOpacity> 
             </View>

             <View style={{flexDirection: 'row', flex: 1}}>
               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("4")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 4 </Text>                             
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("5")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 5 </Text> 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("6")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 6 </Text> 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoLaranja}
                  onPress ={() => this.apertei("+")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> + </Text>
               </TouchableOpacity>
             </View>

             <View style={{flexDirection: 'row', flex: 1}}>
               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("7")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 7 </Text>                              
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("8")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 8 </Text> 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei("9")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 9 </Text> 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoLaranja}
                  onPress ={() => this.apertei("*")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> x </Text> 
               </TouchableOpacity>
             </View>


             <View style={{flexDirection: 'row', flex: 1}}>

               <TouchableOpacity style={styles.botaoGrande}
                  onPress ={() => this.apertei("0")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> 0 </Text>                              
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoCinza}
                  onPress ={() => this.apertei(".")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> . </Text>                 
               </TouchableOpacity>

               <TouchableOpacity style={styles.botaoLaranja}
                  onPress ={()=> this.apertei("=")}
               >
                 <Text style={styles.headline,{fontSize: 30}}> = </Text>                
               </TouchableOpacity>
             
             </View>

         </View>
      
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: 'black',
   padding: 8,
 },

 container2: {
   flex: 1,
   justifyContent: 'top',
   textAlign: 'right',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: 'black',
   textDecorationColor: 'white',
   padding: 2,
 },

 container2_1: {
   flex: 1,
   justifyContent: 'top',
   textAlign: 'right',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: 'black',
   padding: 2,
 },

 container3: {
   flex: 5,
   justifyContent: 'top',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: 'black',
   padding: 2,
 },

 botaoCinza: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   textTransform: 30,
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: '#A4A4A4',
   margin: 1,
   padding: 2,
 }, 

 botaoLaranja: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: '#FF8000',
   margin: 1,
   padding: 2,
 },

 botaoGrande: {
   flex: 2,
   justifyContent: 'center',
   alignItems: 'center',
  //  paddingTop: Constants.statusBarHeight,
   backgroundColor: '#A4A4A4',
   margin: 1,
   padding: 5,
 },
 });

