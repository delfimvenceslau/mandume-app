import { TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
export default function SearchInput() {
 return (
   <View
   className="
   flex
   flex-row
   bg-white
   w-96
   p-2
   items-center
   mt-5
   shadow-md
   rounded-3xl
   "
   >
    <TextInput
    placeholder="Procurar"
    className="
    w-80
    h-10
    p-3
    "
    />
    <Feather name='search' size={25}/>
   </View>
  );
}