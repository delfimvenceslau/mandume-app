import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';
export default function Avatar() {
 return (
   <View>
    <Feather name="user" size={25}/>
   </View>
  );
}