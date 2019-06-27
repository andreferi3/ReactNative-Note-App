import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, Text, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

class drawerMenu extends Component {
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
    
    togglePicker() {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
    }
      
    render() {
        return (
            <ScrollView>
                <View style={styles.drawerProfile}>
                    <Image source={require('../icon/andre.jpg')} style={styles.profileImg} />
                </View>

                <View style={styles.userName}>
                    <Text style={styles.nameText}>Andre Feri Saputra</Text>
                </View>

                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>

                    <DrawerItems {...this.props} />

                    <TouchableOpacity 
                        style={styles.modalBtn} 
                        onPress={() => this.togglePicker()}>
                            
                        <Image source={require('../icon/addcategory.png')} style={styles.addCatIcon} />
                        
                        <Text style={styles.addCatText}>Add Category</Text>
                    </TouchableOpacity>

                    <Modal visible={this.state.pickerDisplayed} animationType={"fade"} transparent={true}>
                    <TouchableHighlight onPress={() => this.togglePicker()} style={{ height:'100%' }}>
                        <View style={styles.modalContainer}>

                                <TextInput style={styles.catName} placeholder='Category Name...' multiline={true} />

                                <TextInput multiline={true} style={styles.catImg} placeholder='Image Url...' />

                            <View style={{padding:10, flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                <TouchableHighlight onPress={() => this.togglePicker()} style={{alignItems:'flex-start'}}>
                                    <Text style={{ color: '#999', fontWeight:'bold' }}>Add</Text>
                                </TouchableHighlight>
                                
                                <TouchableHighlight onPress={() => this.togglePicker()} style={{ alignItems:'flex-end' }}>
                                    <Text style={{ color: '#999' }}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </TouchableHighlight>
                    </Modal>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    modalContainer: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        top: 150,
        right: 50,
        left: 50,
        position: 'absolute',
        elevation: 30, 
    },
    drawerProfile: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginVertical:15
    },
    profileImg : {
        height:120, 
        width:120, 
        borderRadius:60, 
        justifyContent:'center', 
        alignItems:'center'
    },
    userName: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:30
    },
    nameText: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'#000'
    },
    modalBtn: {
        flexDirection:'row', 
        marginTop:7
    },
    addCatIcon: {
        width:20, 
        height:20, 
        marginLeft: 17
    },
    addCatText: {
        color: 'black', 
        fontWeight:'bold', 
        marginLeft: 37
    },
    catName: {
        width:'100%', 
        borderColor:'#2ED1A2', 
        borderBottomWidth:1, 
        marginBottom:7
    },
    catImg: {
        width:'100%', 
        borderColor:'#2ED1A2', 
        borderBottomWidth:1
    }
  });

export default drawerMenu;