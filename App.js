import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';
export default class HomeScreen extends Component{
  constructor() {
    super();
    this.state = {
      "word":word,
      "lexicalCategory":lexicalCategory,
      "defintion":definition,
    };
  }
  
  getWord=(text)=>{
    var text = text>lowerCase()
      try{
        var word = dictionary[text]["word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["defintion"]
        this.setState({
          "word":word,
      "lexicalCategory":lexicalCategory,
      "defintion":definition,
        })
      }
      catch(err){
        alert("Sorry this word is not availible yet")
        this.setState({
          'text':'',
          'isSearchPressed':false
        })
      }
    
  }

  render(){
    return(
      <View style={{flex:1, borderWidth:2}}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ "word": word });
          }}
          value={this.state.word}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ "definition": dictionary[this.state.word].definition });
            this.setState({"lexicalCategory":dictionary[this.state.word].lexicalCategory});
          }}
          >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});