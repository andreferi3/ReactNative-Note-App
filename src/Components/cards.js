import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { getNotes, deleteNotes, getNotesWithParams } from '../public/redux/actions/notes';
import moment from 'moment';

class FlatListItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = ({
            time: moment(this.props.item.created_at).format('D MMM')
        })
    }

    render() {
        const colorList = ['#2FC2DF', '#C0EB6A', '#FAD06C', '#FF92A9', '#fff78f', '#58b368', '#67eaca', '#f79c1d', '#ff0b55', '#7f4782'];
        return (
            <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('EditNote', this.props.item)}}
            onLongPress={this.props.deleteNote}
            style={{
                    flex: 1,
                    margin: '4%',
                    width: wp('36%'),
                    height: hp('25%'),
                    borderRadius: 5,
                    elevation: 5,
                    zIndex: -1,
                    paddingHorizontal: 20,
                    backgroundColor: this.props.item.id_category == null ? '#004d61' : this.props.item.id_category >= 10 ?  colorList[this.props.item.id_category.toString().slice(1,2)] : colorList[this.props.item.id_category]
                }} >
                <Text style={styles.date}>{this.state.time}</Text>
                <Text style={styles.title}>{this.props.item.notes_title}</Text>
                {
                    this.props.item.category === null ? 
                    <Text style={styles.category}>Empty</Text> :
                    <Text style={styles.category}>{this.props.item.category}</Text>
                }
                <Text numberOfLines={2} style={styles.note}>{this.props.item.note_description+'...'}</Text>
            </TouchableOpacity>
        )
    }
}

class cards extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            refreshing: false,
            search: '',
            page: 1,
            sort: ''
        }
    }

    async deleteNote(id) {
        try {
            this.props.dispatch(deleteNotes(id));
        }
        catch(err) {
            console.log(err)
        }
    }

    _keyExtractor = (item, index) => item.id_note;

    render() {
        return (
                <FlatList 
                data={this.props.notes.data}
                numColumns={2}
                refreshControl={
                    <RefreshControl 
                    refreshing={this.props.notes.isLoading}
                    onRefresh={this.props.onRefresh} />
                }
                keyExtractor={this._keyExtractor}
                onEndReached={this.props.fetchNotesWithPagination}
                onEndReachedThreshold={this.props.limitScrollForFetch}
                ListFooterComponent={this.props.refreshFooter}
                deleteNote={() => {this.props.deleteNote}}
                renderItem={({item, index}) => {
                    return(
                        <FlatListItem navigation={this.props.navigation} item={item}  index={index} deleteNote={() => 
                            Alert.alert(
                            'Warning!',
                            'Are you sure want to delete this notes ?',
                            [
                              {text: 'Oke', onPress: () => this.deleteNote(item.id_note)},
                              {},
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              }
                            ],
                            {cancelable: false},
                          )}>

                        </FlatListItem>
                    )
                }}>

                </FlatList>
        )
    }
}

// map state to props
const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(cards)

const styles = StyleSheet.create({
    date: {
        paddingTop: 10,
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        marginTop: 5
    },
    category: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10
    },
    note: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})