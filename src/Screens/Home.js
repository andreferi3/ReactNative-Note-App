import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/header';
import Cards from '../Components/cards';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: 'true'
        };
      }

    render() {
        return (
        <React.Fragment>
            <Header navigation={this.props.navigation} />

            <View style={styles.containerSearch}>
                <TextInput placeholder='Search...' style={styles.searchInput} />
            </View>

            <ScrollView>          
                <Cards navigation={this.props.navigation} />
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNote')}}>
                    <Image source={require('../icon/plus.png')} style={{width:25, height:25 }} />
                </TouchableOpacity>
            </View>

        </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    containerSearch: {
        flex: 6,
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        marginTop: 70,
        marginBottom: 20
    },
    searchInput: {
        borderRadius: 15,
        paddingLeft: 20,
        height: 40,
        elevation: 3
    },
    buttonContainer: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        width:60, 
        height:60, 
        backgroundColor: '#ffffff', 
        borderRadius: 50, 
        elevation: 30, 
        position: 'absolute', 
        right: 15, 
        bottom: 30
    }
})