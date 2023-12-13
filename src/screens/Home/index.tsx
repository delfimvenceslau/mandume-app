import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function Home() {

  const navigate = useNavigation();
  const handleScreen = () => {
    navigate.navigate('Profile');
  }
 return (
   <View>
    <Text>Home</Text>
    <Button title='Profile' onPress={handleScreen}/>
   </View>
  );
}