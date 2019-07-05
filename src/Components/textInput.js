import React, { Component } from 'react'
import { View, TextInput, ScrollView, Picker, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { addNotes } from '../public/redux/actions/notes';

class textInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category: ''
    }
  }

  async addNotes(data) {
    try {
      this.props.dispatch(addNotes(data))
      this.props.navigation.goBack();
    } catch(err) {

    }
  }

  render() {
    return (
      <React.Fragment>
      <View style={{marginHorizontal:20}}>
        <TextInput placeholder="ADD TITLE..." maxLength={50} style={{marginTop: 60, fontSize: 24}} numberOfLines={5} multiline={true} editable={true} onChangeText={val => this.setState({title: val})} />
        <ScrollView style={{height:heightPercentageToDP('30%')}}>
            
            <TextInput placeholder="ADD DESCRIPTION..." style={{fontSize: 24}} numberOfLines={7} multiline={true} editable={true} onChangeText={val => this.setState({description: val})} />

        </ScrollView>

       <View style={{marginTop:50}}>
        <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Category</Text>
        <Picker
              selectedValue={this.state.category} mode='dropdown'
              style={{height: 70, width: widthPercentageToDP('45%'), borderWidth:1, borderColor:'black'}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({category: itemValue})
              }>

              <Picker.Item label='Select Category' value='' />
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
              <TouchableOpacity onPress={() => this.addNotes({title: this.state.title, note: this.state.description, category_id: this.state.category})}>
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

export default connect(mapStateToProps)(textInput);