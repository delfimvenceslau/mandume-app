import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AuthNavigation from './Auth';
import StackNavigationRouter from './Stack/StackNavigationRouter';

export default function Routes() {
 return (
   <NavigationContainer>
    <StackNavigationRouter />
    {/* <AuthNavigation/> */}
   </NavigationContainer>
  );
}