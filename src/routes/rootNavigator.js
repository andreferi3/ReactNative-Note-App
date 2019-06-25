import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import Notes from '../Screens/Notes';
import DrawerMenu from '../Components/drawerMenu';
import Wishlist from '../Screens/Wishlist';
import AddCategory from '../Screens/AddCategory';

  const AppDrawerNavigator = createDrawerNavigator(
    {
      Home: Home,
      Notes: Notes,
      Wishlist: Wishlist,
      AddCategory: AddCategory
    },
    {
      contentComponent: DrawerMenu
    }
  )

export default createAppContainer(AppDrawerNavigator);