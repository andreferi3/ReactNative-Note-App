import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';


class headerBack extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.imgProfilContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                        <Image 
                            style={styles.imgProfil} 
                            source={require('../icon/leftarrow.png')}  />
                    </TouchableOpacity>
                </View>

                <View style={styles.brandContainer}>
                    <Text style={styles.brandName}>Note App</Text>
                </View>

                <View style={styles.sortByContainer}>
                    <TouchableOpacity onPress={() => {
                        
                    }}>
                        <Image 
                            style={{width:25, height:25}} 
                            source={require('../icon/check.png')}  />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width:'100%', 
        height:50, 
        backgroundColor:'#ffffff', 
        elevation:10,
        flex:1, 
        flexDirection:'row',
        position: 'absolute',
        top: 0
    },
    imgProfilContainer: {
        alignItems:'center', 
        marginLeft:15, 
        justifyContent:'center'
    },
    imgProfil: {
        width:30, 
        height:30, 
        borderRadius:50
    },
    brandContainer: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    brandName: {
        fontWeight:'bold', 
        color:'#000', 
        fontSize:16
    },
    sortByContainer: {
        alignItems:'center', 
        marginRight:20, 
        justifyContent:'center'
    }
})

export default headerBack;
