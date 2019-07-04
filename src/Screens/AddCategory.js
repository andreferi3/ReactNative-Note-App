import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, FlatList, Picker, ActivityIndicator } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { getCategory } from '../public/redux/actions/category';

export default class AddCategory extends Component {
    
    state = {
        title: '',
        description: '',
        category: '',
        data: []
    }
    
    static navigationOptions = {
        drawerLabel: 'Add Category',
        drawerIcon: ({ tintColor }) => (
            <Image 
            source={require('../icon/addcategory.png')} 
            style={{width:20, height:20, tintColor: tintColor}}/>
        )
    }

    // fetchData = () => {
    //     this.props.dispatch(getCategory());
    // }

    // componentDidMount() {
    //     this.fetchData();
    // }

    // _addNote = () => {
    //     if(this.state.title === '') {
    //         return;
    //     }

    //     this.setState(prevState => {
    //         return {
    //             notes: prevState.notes.concat({
    //                 key: Math.random(),
    //                 title: prevState.title,
    //                 note: prevState.description,
    //                 category_id: prevState.category
    //             })
    //         }
    //     })

    //     try {
    //         axios({
    //             method: 'POST',
    //             url: 'http://192.168.100.94:8080/notes',
    //             data: {
    //                 title: this.state.title,
    //                 note: this.state.description,
    //                 category_id: this.state.category
    //             }
    //         })
    //         .then(res => {
    //             console.warn(res.data);
    //         })
    //     } catch(error) {
    //         console.error('Error is : ' + error)
    //     }
    // }

    render() {
        console.warn(JSON.stringify(this.props.category.data));
        return (
            <View style={styles.container}>
                <TextInput 
                    style={
                        {
                            borderWidth:1, 
                            borderColor:'black', 
                            width:'100%'
                        }
                    }
                    placeholder='Note Title'
                    onChangeText={(val) => this.setState({title: val})} />

                <TextInput 
                    style={
                        {
                            borderWidth:1, 
                            borderColor:'black', 
                            width:'100%',
                            marginVertical: 10
                        }
                    } 
                    placeholder='Note Description'
                    onChangeText={(val) => this.setState({description: val})} />

                <Picker
                    selectedValue={this.state.category} mode='dropdown'
                    style={{height: 70, width: widthPercentageToDP('45%'), borderWidth:1, borderColor:'black'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({category: itemValue})
                    }>
                    
                    {/* {
                        this.props.category.data.map(item => (
                            <Picker.Item value={item.id} label={item.name} key={item.id} />
                        ))
                    } */}
                    
                </Picker>

                <Button title='Add Note' onPress={this._addNote} />

            </View>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         category: state.category
//     }
// }

// export default connect(mapStateToProps)(AddCategory)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    }
})