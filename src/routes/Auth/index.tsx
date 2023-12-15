import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Login from '@screens/Login';
import SingIn from '@screens/SingIn';

const Stack = createStackNavigator();
export default function AuthNavigation() {
 return (
    <Stack.Navigator
    screenOptions={{
      
    }}
    >
    <Stack.Screen 
    name="SingIn" 
    component={SingIn} 
    />
    <Stack.Screen 
    name="Login" 
    component={Login}
    options={{
    }}
    />
  </Stack.Navigator>
  );
}