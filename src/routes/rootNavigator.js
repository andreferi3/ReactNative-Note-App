import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import Notes from '../Screens/Notes';
import DrawerMenu from '../Components/drawerMenu';
import Wishlist from '../Screens/Wishlist';
import AddCategory from '../Screens/AddCategory';
import AddNote from '../Screens/AddNote';
import EditNote from '../Screens/EditNote';

const AppStackNavigator = createStackNavigator (
  {
    Home : {
      screen : Home,
      navigationOptions : {
        header: null,
        drawerIcon: ({ tintColor }) => (
          <Image 
          source={require('../icon/note.png')} 
          style={{width:20, height:20, tintColor: tintColor}}/>
        )
      }
    },
    AddNote : {
      screen : AddNote,
      navigationOptions : () => ({
        header: null
      })
    },
    EditNote : {
      screen : EditNote,
      navigationOptions : () => ({
        header: null
      })
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackNavigator,
      navigationOptions: {
        drawerLabel: ()=>null
      }
    },
    Notes: Notes,
    Wishlist: Wishlist
  },
  {
    contentComponent: DrawerMenu
  }
)

export default createAppContainer(AppDrawerNavigator);