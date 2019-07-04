import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    modalContainer: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        top: 150,
        right: 50,
        left: 50,
        position: 'absolute',
        elevation: 30, 
    },
    drawerProfile: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginVertical:15
    },
    profileImg : {
        height:120, 
        width:120, 
        borderRadius:60, 
        justifyContent:'center', 
        alignItems:'center'
    },
    userName: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:30
    },
    nameText: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'#000'
    },
    modalBtn: {
        flexDirection:'row', 
        marginTop:7,
        marginVertical: 6
    },
    addCatIcon: {
        width:25, 
        height:25, 
        marginLeft: 17
    },
    addCatText: {
        color: 'black', 
        fontWeight:'bold', 
        marginLeft: 37,
        fontSize: 18
    },
    catName: {
        width:'100%', 
        borderColor:'#2ED1A2', 
        borderBottomWidth:1, 
        marginBottom:7
    },
    catImg: {
        width:'100%', 
        borderColor:'#2ED1A2', 
        borderBottomWidth:1
    }
  });