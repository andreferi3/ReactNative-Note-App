import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import dummyData from '../Components/dummyData';

class FlatListItem extends Component {

    state = {
        color: this.props.item.category.toLowerCase()
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('EditNote', this.props.item)}}
            style={
                {
                    flex: 1,
                    margin: '4%',
                    width: wp('36%'),
                    height: hp('25%'),
                    borderRadius: 5,
                    elevation: 5,
                    zIndex: -1,
                    paddingHorizontal: 20,
                    backgroundColor: this.state.color == 'learn' ? '#2FC2DF' : this.state.color == 'work' ? '#C0EB6A' : this.state.color == 'wishlist' ? '#FAD06C' : this.state.color == 'personal' ? '#FF92A9' : '#004d61'
                }
            }>
                <Text style={styles.date}>{this.props.item.time.substring(0,)}</Text>
                <Text style={styles.title}>{this.props.item.title}</Text>
                <Text style={styles.category}>{this.props.item.category}</Text>
                <Text style={styles.note}>{this.props.item.note.substring(0,40)+'...'}</Text>
            </TouchableOpacity>
        )
    }
}

export default class cards extends Component {
    render() {
        return (
            <View>
                <FlatList 
                data={dummyData}
                numColumns={2}
                renderItem={({item, index}) => {
                    return(
                        <FlatListItem navigation={this.props.navigation} item={item} index={index}>

                        </FlatListItem>
                    )
                }}>

                </FlatList>
            </View>
        )
    }
}

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