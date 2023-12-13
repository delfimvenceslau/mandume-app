import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
interface ButtonProps extends TouchableOpacityProps{
    title: string,
    icon?: string
}

export default function Button({title, icon, ...rest}: ButtonProps) {
 return (
   <TouchableOpacity 
   style={styles.button} 
   {...rest}
   >
    <Text>{title}</Text>
    <Ionicons 
    name={icon}
    color={'black'} 
    size={30} 
    />
    
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'red',
    padding: 15
  }
});