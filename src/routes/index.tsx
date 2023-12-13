import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AuthNavigation from './Auth';

export default function Routes() {
 return (
   <NavigationContainer>
    <AuthNavigation />
   </NavigationContainer>
  );
}