import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class AddCategory extends Component {
    static navigationOptions = {
        drawerLabel: 'Add Category',
        drawerIcon: ({ tintColor }) => (
            <Image 
            source={require('../icon/addcategory.png')} 
            style={{width:20, height:20, tintColor: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Add Category</Text>
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