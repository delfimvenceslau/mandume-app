import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import {Ionicons, Feather} from "@expo/vector-icons";
import Avatar from '@components/Avatar';
import SearchInput from '@components/SearchInput';
import ImagePB from '@components/ImagePB';
import Categorias from '@components/Categorias';

export default function Home() {

  const navigate = useNavigation();
  const handleScreen = () => {
    /* navigate.navigate('Profile'); */
  }

  const data = [
    {
      id:1,
      nome: "Arroz",
      preco: 5000
    },
    {
      id:2,
      nome: "Arroz",
      preco: 5000
    }
    ,
    {
      id:3,
      nome: "Arroz",
      preco: 5000
    }
    ,
    {
      id:4,
      nome: "Arroz",
      preco: 5000
    }
    ,
    {
      id:5,
      nome: "Arroz",
      preco: 5000
    }
  ]

  const categorias = [
    {
      id: 1,
      categoria: 'Restaurantes'
    },
    {
      id: 2,
      categoria: 'Hambugarias'
    },
    {
      id: 3,
      categoria: 'Fast Food'
    },
    {
      id: 4,
      categoria: 'Ghost Kichens'
    },
    {
      id: 5,
      categoria: 'Bares'
    },
  ]
 return (
   <SafeAreaView className='flex-1 items-center bg-white text-black'>
    <View
    className="
    flex
    flex-row
    justify-between
    items-center
    w-96
    p-3
    "
    >
      <Avatar/>
      <Text>Delfim Venceslau</Text>
      <Feather name='align-right' size={30}/>
    </View>
    <SearchInput/>
    
    <View className='h-44 mt-3'>
    <FlatList
    className="
    "
    style={{
      height: 10
    }}
    showsHorizontalScrollIndicator={false}
    horizontal
    data={data}
    renderItem={({item}) => (
      <ImagePB/>
    )}
    />
    </View>

    <View className='h-32 self-center'>
    <FlatList
    className="
    mt-4 
    h-4
    pt-10
    "
    horizontal
    showsHorizontalScrollIndicator={false}
    data={categorias}
    renderItem={({item}) => (
      <Categorias title={item.categoria}/>
    )}
    keyExtractor={item => item.id.toString()}
    contentContainerStyle={{
      paddingStart: 15,
      paddingEnd: 15
    }}
    ItemSeparatorComponent={() => (
      <View className='ml-3'>

      </View>
    )}
    />
    </View>

    <View className="
    justify-start
    items-start
    right-32
    mt-10
    "
    >
      <Text className="text-lg">Recomendações</Text>
    </View>

   </SafeAreaView>
  );
}