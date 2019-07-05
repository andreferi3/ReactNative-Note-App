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

    fetchNotesPagination = () => {
        if(this.state.page < this.props.notes.page) {
            this.setState({
                page: this.state.page + 1
            },
            () => {
                this.props.dispatch(getNotesWithParams(this.state.search, this.state.page, this.state.sort))
            })
        }
    }
    
    fetchNotes = () => {
        this.props.dispatch(getNotes(this.state.search, 1, this.state.sort));
    }

    fetchCategories = () => {
        this.props.dispatch(getCategory());
    }

    // findNoteByTitle = val => {
    //     try {
    //         if(this.props.notes.page > 1) {
    //             this.setState({
    //                 page: 1,
    //                 search: val
    //             },
    //             () => 
    //                 this.props.dispatch(getNotes(this.state.search, this.state.page, this.state.sort))
    //             )
    //         }
    //     } catch(err) {
    //         return val + ' Data not found';
    //     }
    // }

    onRefresh = () => {
        this.setState({refreshing: true}, 
        () => {
            this.fetchNotes()
        })
    }

    sortByAscending = () => {
        this.setState({
            page: 1,
            sort: 'ASC'
        },
        () => this.props.dispatch(getNotes(this.state.search, this.state.page, this.state.sort)))
    }

    sortByDescending = () => {
        this.setState({
            page: 1,
            sort: 'DESC'
        },
        () => this.props.dispatch(getNotes(this.state.search, this.state.page, this.state.sort)))
    }


    render() {
        return (
        <React.Fragment>
            {
                this.props.notes.isLoading ? <ActivityIndicator size='large' color='#0000ff' style={{height: '100%', width:'100%'}} /> 
                : this.props.notes.isError ? <Text>Data not found</Text>
                : null 
            }
            <Header 
                navigation={this.props.navigation}
                sortByAscending={this.sortByAscending}
                sortByDescending={this.sortByDescending} />

            <View style={styles.containerSearch}>
                <TextInput placeholder='Search...' style={styles.searchInput} onChangeText={
                    (val) => {
                        this.setState({
                            search: val
                        },
                        () => {
                            this.props.dispatch(getNotes(this.state.search, 1, this.state.sort))
                        })}} />
            </View>       
            
            <Cards 
                navigation={this.props.navigation}
                fetchNotesWithPagination={this.fetchNotesPagination}
                limitScrollForFetch={0.1}
                onRefresh={this.onRefresh}
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