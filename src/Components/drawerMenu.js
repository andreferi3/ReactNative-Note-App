import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, Text, TouchableOpacity, Modal, TouchableHighlight, TextInput, FlatList, Alert } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import {styles} from '../public/styles/style.me';
import { connect } from 'react-redux';
import { addCategory, deleteNotesByCategory } from '../public/redux/actions/category';
import { getNotesByCategoryId } from '../public/redux/actions/notes';
import { DrawerActions } from 'react-navigation-drawer';

class drawerMenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          pickerSelection: 'Default value!',
          pickerDisplayed: false,
          name: '',
          image: '',
          search: '',
          sort: 'desc',
          page: 1
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

    async addCategory(data) {
        try {
            this.props.dispatch(addCategory(data));
            this.togglePicker();
        }
        catch(err) {
            console.error(err)
     
        }
    }

    async getAllNotesByCategory(id) {
        try {
            this.props.dispatch(getNotesByCategoryId(id, this.state.search, this.state.page, this.state.sort))
            this.props.navigation.dispatch(DrawerActions.closeDrawer())
        }
        catch(err) {
            console.log(err);
        }
    }

    async deleteAllNoteByCategory(id) {
        try {
            this.props.dispatch(deleteNotesByCategory(id));
        }
        catch(err) {
            console.log(err);
        }
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

                    {/* <CategoryItem category={this.props.category} />                   */}

                    <FlatList 
                    data={this.props.category.data}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity 
                                style={styles.modalBtn}
                                onPress={() => this.getAllNotesByCategory(item.id)}
                                onLongPress={() => {
                                    Alert.alert(
                                        'Warning!',
                                        `Are you sure want to delete all notes from category ${item.name}`,
                                        [
                                          {text: 'Oke', onPress:() => this.deleteAllNoteByCategory(item.id)},
                                          {},
                                          {
                                            text: 'Cancel',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                          }
                                        ],
                                        {cancelable: false},
                                    )
                                }}>
                                    
                                <Image source={{uri: item.image}} style={styles.addCatIcon} />
                                
                                <Text style={styles.addCatText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    />
{/* this.deleteAllNoteByCategory */}
                    <TouchableOpacity 
                        style={styles.modalBtn} 
                        onPress={() => this.togglePicker()}>
                            
                        <Image source={require('../icon/addcategory.png')} style={styles.addCatIcon} />
                        
                        <Text style={styles.addCatText}>Add Category</Text>
                    </TouchableOpacity>

                    <Modal visible={this.state.pickerDisplayed} animationType={"fade"} transparent={true}>
                    <TouchableHighlight onPress={() => this.togglePicker()} style={{ height:'100%' }}>
                        <View style={styles.modalContainer}>

                                <TextInput style={styles.catName} placeholder='Category Name...' multiline={true} onChangeText={val => this.setState({name: val})} />

                                <TextInput multiline={true} style={styles.catImg} placeholder='Image Url...' onChangeText={val => this.setState({image: val})} />

                            <View style={{padding:10, flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                <TouchableHighlight 
                                    onPress={() => this.addCategory({name: this.state.name, image: this.state.image})} 
                                    style={{alignItems:'flex-start'}}>
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

{styles};

const mapStateToProps = state => {
    return {
        category: state.category,
        notes: state.notes
    }
}

export default connect(mapStateToProps)(drawerMenu);