import Input from '@components/input/index';
import { Mail } from 'lucide-react-native';
import { Image, Text, View } from 'react-native';

export default function Login() {
 return (
   <View className='flex-1 items-center justify-center bg-primary'>
    <View>
      <Image source={require('@assets/')}/>
    </View>

    <Input 
    nameIcon='call'
    sizeIcon={25}
    placeholder='Numero de telefone'
    />
    <Input 
    nameIcon='key' 
    sizeIcon={25}
    placeholder='Senha'
    />
   </View>
  );
}