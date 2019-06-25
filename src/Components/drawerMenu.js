import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

const drawerMenu = props => (
    <ScrollView>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginVertical:15}}>
            <Image source={require('../icon/andre.jpg')} style={{height:120, width:120, borderRadius:60, justifyContent:'center', alignItems:'center'}} />
        </View>

        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:30}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>Andre Feri Saputra</Text>
        </View>

        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} style={{fontSize: 30, marginTop:30}} />
        </SafeAreaView>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default drawerMenu;