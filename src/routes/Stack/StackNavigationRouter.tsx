import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';

const Stack = createStackNavigator();
export default function StackNavigationRouter() {
 return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
    <Stack.Screen 
    name="Home" 
    component={Home}
    />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
  );
}