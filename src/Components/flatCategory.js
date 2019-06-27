import React, { Component } from 'react';
import { FlatList } from 'react-native';
import categoryData from './categoryData';

export default class TextInputFix extends React.Component {

  render() {
    return (
      <View>
          <FlatList
            data={categoryData}
            renderItem={({item, index}) => {
              return (
                <Picker.Item label={item.name} value={item.name} index={index} />
              )
            }}
          >

          </FlatList>
      </View>
    )
  }
}