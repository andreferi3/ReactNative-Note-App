import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';


class header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.imgProfilContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.toggleDrawer()}}>
                        <Image 
                            style={styles.imgProfil} 
                            source={require('../icon/andre.jpg')}  />
                    </TouchableOpacity>
                </View>

                <View style={styles.brandContainer}>
                    <Text style={styles.brandName}>Note App</Text>
                </View>

                <View style={styles.sortByContainer}>
                    <TouchableOpacity onPress={() => {
                        
                    }}>
                        <Image 
                            style={{width:20, height:20}} 
                            source={require('../icon/download.png')}  />
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
        marginLeft:10, 
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

export default header;