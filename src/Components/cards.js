import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import dummyData from '../Components/dummyData';

class FlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity style={
                {
                    flex: 1,
                    margin: '4%',
                    width: wp('36%'),
                    height: hp('25%'),
                    borderRadius: 5,
                    elevation: 5,
                    paddingHorizontal: 20,
                    backgroundColor: this.props.item.category == 'Learn' ? '#2FC2DF' : '#FAD06C'
                }
            }>
                <Text style={styles.date}>{this.props.item.time}</Text>
                <Text style={styles.title}>{this.props.item.title}</Text>
                <Text style={styles.category}>{this.props.item.category}</Text>
                <Text style={styles.note}>{this.props.item.note}</Text>
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
                        <FlatListItem item={item} index={index}>

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