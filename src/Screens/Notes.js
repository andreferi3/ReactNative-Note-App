import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Notes extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Portofolio',
        drawerIcon: ({ tintColor }) => (
            <Image 
            source={require('../icon/portofolio.png')} 
            style={{width:20, height:20, tintColor: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Notes</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})