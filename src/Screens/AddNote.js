import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/headerBack';
import { TextInput, ScrollView, Picker } from 'react-native';
import CustomTextInput from '../Components/textInput';

export class AddNote extends Component {

    static navigationOptions = {
        title : ''
    }

    render() {
        return (
            <React.Fragment>
                <CustomTextInput />
                <Header navigation={this.props.navigation} />
            </React.Fragment>
        )
    }
}

export default AddNote;