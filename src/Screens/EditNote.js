import React, { Component } from 'react';
import CustomTextInput from '../Components/textInput';
import Header from '../Components/headerBack';
import { View, ScrollView, TextInput, Picker, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { editNotes, getNotes } from '../public/redux/actions/notes';

class EditNote extends Component {

    state = {
        category: this.props.navigation.state.params.id_category,
        categorySelected: this.props.navigation.state.params.category,
        idNote: parseInt(this.props.navigation.state.params.id_note),
        noteTitle: this.props.navigation.state.params.notes_title,
        noteDescription: this.props.navigation.state.params.note_description,
        search: '',
        page: 1,
        sort: 'desc'
    }

    _onTitleChange = val => {
        this.setState({
            noteTitle: val
        })
        console.log(val);
    }

    _onNoteChange = val => {
        this.setState({
            noteDescription: val
        })
        console.log(val)
    }

    async editNotes() {
        try {
            this.props.dispatch(editNotes(this.state.idNote, 
                {
                    title: this.state.noteTitle, 
                    note: this.state.noteDescription, 
                    category_id: this.state.category
                }))
            this.props.navigation.goBack();
        } 
        catch(err) {
            console.log(err);
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <View style={{marginHorizontal:20}}>
                    <TextInput 
                        maxLength={50} 
                        style={
                            {
                                marginTop: 60, 
                                fontSize: 24
                            }
                        } 
                        numberOfLines={5} 
                        multiline={true} 
                        placeholder='Add Title' 
                        editable={true}
                        onChangeText={this._onTitleChange}
                    >{this.props.navigation.state.params.notes_title}</TextInput>

                    <ScrollView style={{height:heightPercentageToDP('30%')}}>
                        
                        <TextInput
                            style={{fontSize: 24}} 
                            numberOfLines={7} 
                            multiline={true} 
                            placeholder='Add Note'
                            editable={true}
                            onChangeText={this._onNoteChange}>{this.props.navigation.state.params.note_description}</TextInput>

                    </ScrollView>

                <View style={{marginTop:50}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Category</Text>
                    <Picker
                        selectedValue={this.state.category}
                        mode='dropdown'
                        style={{
                                height: 70, 
                                width: widthPercentageToDP('45%'), 
                                borderWidth:1, 
                                borderColor:'black'
                            }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({category: itemValue})
                        }>
                        {                            
                            this.props.category.data.map(item => (

                                <Picker.Item label={item.name} value={item.id} key={item.id} />
                            ))
                        }

                    </Picker>
                </View>
                </View>

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
                        <TouchableOpacity onPress={() => this.editNotes()}>
                            <Image 
                                style={{width:25, height:25}} 
                                source={require('../icon/check.png')}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </React.Fragment>
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

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(EditNote);