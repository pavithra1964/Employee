import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'



export default class Form extends Component {
    
    render() {
        return (
            <View>
      <Text>Emp Code :</Text>
        <TextInput placeholder="Emp Code" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
    
    </View>


        )
    }
}
