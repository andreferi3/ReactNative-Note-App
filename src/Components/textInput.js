import React, { Component } from 'react'
import { View, TextInput, ScrollView, Picker, Text } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import PickerItem from './flatCategory' ;

export default class textInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      language: ''
    }
  }

  render() {
    return (
      <View style={{marginHorizontal:20}}>
        <TextInput placeholder="ADD TITLE..." maxLength={50} style={{marginTop: 60, fontSize: 24}} numberOfLines={5} multiline={true} editable={true} />
        <ScrollView style={{height:heightPercentageToDP('30%')}}>
            
            <TextInput placeholder="ADD DESCRIPTION..." style={{fontSize: 24}} numberOfLines={7} multiline={true} editable={true} />

        </ScrollView>

       <View style={{marginTop:50}}>
        <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Category</Text>
        <Picker
              selectedValue={this.state.language} mode='dropdown'
              style={{height: 70, width: widthPercentageToDP('45%'), borderWidth:1, borderColor:'black'}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
              }>

              <Picker.Item label='Select Category' value='' />
              <Picker.Item label='Learn' value='Learn' />
              <Picker.Item label='Work' value='Work' />
              <Picker.Item label='Wishlist' value='Wishlist' />
              <Picker.Item label='Personal' value='Personal' />
          </Picker>
       </View>
      </View>
    )
  }
}