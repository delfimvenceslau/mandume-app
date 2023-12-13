import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface InputProps extends TextInputProps{
  nameIcon: string;
  colorIcon?: string,
  sizeIcon: number
}
export default function Input({nameIcon, colorIcon, sizeIcon, ...rest}:InputProps) {
 return (
   <View className="
   flex 
   flex-row
   w-96
   items-center
   rounded-3xl
   space-x-6
   justify-center
   bg-white
   mt-10
   ">
    <Ionicons
    name={nameIcon} 
    color={'#ff0000'} 
    size={sizeIcon}
    className='p-10'
    />
    <TextInput 
    className="
    h-14
    w-72
    italic
    "
    placeholder='Input'
    {...rest}
    />
   </View>
  );
}