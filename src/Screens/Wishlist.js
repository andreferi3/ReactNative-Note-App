import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Wishlist extends Component {
    static navigationOptions = {
        drawerLabel: 'Wishlist',
        drawerIcon: ({ tintColor }) => (
            <Image 
            source={require('../icon/wishlist.png')} 
            style={{width:20, height:20, tintColor: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Wishlist</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})