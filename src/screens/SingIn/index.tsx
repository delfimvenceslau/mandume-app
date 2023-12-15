import Button from '@components/Button';
import Input from '@components/input';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard, KeyboardAvoidingView, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SingIn() {

  const navigation = useNavigation();
  const handlenavigation = () => {
    navigation.navigate('Login')
  }
 return (
  <View className='flex-1 items-center justify-center bg-primary'>
  <View>
    
  </View>

  <KeyboardAvoidingView behavior='position' enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <Input
  nameIcon='person'
  sizeIcon={25}
  placeholder='Numero de telefone'
  />
  <Input 
  nameIcon='call' 
  sizeIcon={25}
  placeholder='Senha'
  />
  <Input 
  nameIcon='mail' 
  sizeIcon={25}
  placeholder='Senha'
  />
  <Input 
  nameIcon='key' 
  sizeIcon={25}
  placeholder='Senha'
  />
  </TouchableWithoutFeedback>
  <Button
  title='Criar a minha conta' 
  icon='arrow-forward'
  style={{marginTop: 25}}
  onPress={handlenavigation}
  />
  </KeyboardAvoidingView>
 </View>
  );
}