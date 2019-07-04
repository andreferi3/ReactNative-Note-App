import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/header';
import Cards from '../Components/cards';
import { connect } from 'react-redux';
import { getCategory } from '../public/redux/actions/category';
import { getNotes, getNotesWithParams } from '../public/redux/actions/notes';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: 'true',
          findNote: '',
          page: 1,
          sort: 'desc',
          search: '',
          refresh: false
        };
      }

    componentDidMount() {
        this.fetchNotes();
        this.fetchCategories();
    }
    
    fetchNotes = () => {
        this.props.dispatch(getNotes());
    }

    fetchCategories = () => {
        this.props.dispatch(getCategory());
    }

    findNoteByTitle = val => {
        try {
            this.props.dispatch(getNotesWithParams(val, this.state.page));
        } catch(err) {
            return val + ' Data not found';
        }
    }

    render() {
        return (
        <React.Fragment>
            {
                this.props.notes.isLoading ? <ActivityIndicator size='large' color='#0000ff' style={{height: '100%', width:'100%'}} /> 
                : this.props.notes.isError ? <Text>Data not found</Text>
                : null 
            }
            <Header navigation={this.props.navigation} />

            <View style={styles.containerSearch}>
                <TextInput placeholder='Search...' style={styles.searchInput} onChangeText={this.findNoteByTitle} />
            </View>       
            
            <Cards 
                navigation={this.props.navigation}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNote')}}>
                    <Image source={require('../icon/plus.png')} style={{width:25, height:25 }} />
                </TouchableOpacity>
            </View>

        </React.Fragment>
        )
    }
}

// map state to props
const mapStateToProps = state => {
    return {
        notes: state.notes,
        category: state.category
    }
}

export default connect(mapStateToProps)(Home);

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