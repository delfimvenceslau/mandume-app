import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
interface ButtonProps extends TouchableOpacityProps{
    title: string,
    icon?: string
}

export default function Button({title, icon, ...rest}: ButtonProps) {
 return (
   <TouchableOpacity 
   className="
   bg-secondary
   rounded-3xl
   p-3
   items-center
   flex-row
   h-14
   text-center
   justify-between
   self-center
   w-56
   "
   {...rest}
   >
    <Text 
    className="
    text-lg
    italic
    "
    >
      {title}
      </Text>
    <Ionicons 
    name={icon}
    color={'black'} 
    size={30} 
    />
    
   </TouchableOpacity>
  );
}