import React, { Component } from 'react';
import CustomTextInput from '../Components/textInput';
import Header from '../Components/headerBack';
import { View, ScrollView, TextInput, Picker, Text } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class EditNote extends Component {

    state = {
        language: '',
        title: this.props.navigation.state.params.title,
        note: this.props.navigation.state.params.note
    }

    _onTitleChange = val => {
        this.setState({
            title: val
        })
    }

    _onNoteChange = val => {
        this.setState({
            note: val
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <View style={{marginHorizontal:20}}>
                    <TextInput 
                        maxLength={50} 
                        style={
                            {
                                marginTop: 60, 
                                fontSize: 24
                            }
                        } 
                        numberOfLines={5} 
                        multiline={true} 
                        placeholder='Add Titel' 
                        editable={true} 
                        onChangeText={this._onTitleChange}
                    >{this.state.title}</TextInput>
                    <ScrollView style={{height:heightPercentageToDP('30%')}}>
                        
                        <TextInput 
                            style={{fontSize: 24}} 
                            numberOfLines={7} 
                            multiline={true} 
                            placeholder='Add Note' 
                            editable={true}
                            onChangeText={this._onNoteChange}>{this.state.note}</TextInput>

                    </ScrollView>

                <View style={{marginTop:50}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Category</Text>
                    <Picker
                        selectedValue={this.state.language} mode='dropdown'
                        style={{height: 70, width: widthPercentageToDP('45%'), borderWidth:1, borderColor:'black'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>

                        <Picker.Item label={this.props.navigation.state.params.category} value={this.props.navigation.state.params.category} />
                        <Picker.Item label='Learn' value='Learn' />
                        <Picker.Item label='Work' value='Work' />
                        <Picker.Item label='Wishlist' value='Wishlist' />
                        <Picker.Item label='Personal' value='Personal' />
                    </Picker>
                </View>
                </View>
                <Header navigation={this.props.navigation} />
            </React.Fragment>
        )
    }
}
