import Button from '@components/Button';
import Input from '@components/input/index';
import { Mail } from 'lucide-react-native';
import { Image, Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Login() {
 return (
   <View className='flex-1 items-center justify-center bg-primary'>
    <View>
      
    </View>

    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

    <Button 
    title='Entrar na conta' 
    icon='arrow-forward'
    style={{marginTop: 25}}
    />
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
   </View>
  );
}