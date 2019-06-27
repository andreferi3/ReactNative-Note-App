import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Form, Picker, Icon } from 'native-base';


class header extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          pickerSelection: 'Default value!',
          pickerDisplayed: false
        }
      }
    
      setPickerValue(newValue) {
        this.setState({
          pickerSelection: newValue
        })
    
        this.togglePicker();
      }
    
      toggleModal() {
        this.setState({
          pickerDisplayed: !this.state.pickerDisplayed
        })
      }
    
      render() {
        const pickerValues = [
          {
            title: 'ASCENDING',
            value: 'ASCENDING'
          },
          {
            title: 'DESCENDING',
            value: 'DESCENDING'
          }
        ]

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

                    <TouchableOpacity onPress={() => this.toggleModal()}>
                        <Image source={require('../icon/download.png')} style={{width:20, height:20}} />
                    </TouchableOpacity>

                    <Modal visible={this.state.pickerDisplayed} animationType={"fade"} transparent={true}>
                      <TouchableHighlight onPress={() => this.togglePicker()} style={{ alignItems:'flex-end', height:'100%' }}>
                        <View style={styles.modalContainer}>
                            { pickerValues.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <Text>{ value.title }</Text>
                                </TouchableHighlight>
                            })}
                            {/* <TouchableHighlight onPress={() => this.togglePicker()} style={{ alignItems:'flex-end' }}>
                                    <Text style={{ color: '#999' }}>Cancel</Text>
                                </TouchableHighlight> */}
                        </View>
                    </TouchableHighlight>
                    </Modal>
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
    },
    modalContainer: {
      margin: 20, 
      padding: 20,
      backgroundColor: '#fff',
      top: 20,
      right: 0,
      alignItems: 'flex-start',
      elevation: 5,
      position: 'absolute' 
    }
})

export default header;