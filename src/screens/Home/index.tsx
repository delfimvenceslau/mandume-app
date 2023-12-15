import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {Ionicons, Feather} from "@expo/vector-icons";
import Avatar from '@components/Avatar';
import SearchInput from '@components/SearchInput';
import ImagePB from '@components/ImagePB';
import Categorias from '@components/Categorias';
import Recomendacoes from '@components/Recomendacoes';
import Estabelecimentos from '@components/Estabelecimentos';

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

  const recomendacoes = [
    {
      id:"1",
      recomendacao: "Prato do dia"
    },
    {
      id:"2",
      recomendacao: "Prato do dia"
    },
    {
      id:"3",
      recomendacao: "Prato do dia"
    },
    {
      id:"4",
      recomendacao: "Prato do dia"
    },
    {
      id:"5",
      recomendacao: "Prato do dia"
    },
    {
      id:"6",
      recomendacao: "Prato do dia"
    },
  ]
 return (
  <>
  <ScrollView
  showsVerticalScrollIndicator={false}
  >
   <SafeAreaView className='flex-1 items-center bg-white text-black'>
    <View
    className="
    flex
    flex-row
    justify-between
    items-center
    w-96
    p-3
    fixed
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
    contentContainerStyle={{
      paddingStart: 15,
      paddingEnd: 15
    }}
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
      <View className='ml-2'>

      </View>
    )}
    />
    </View>

    <View className="
    justify-start
    items-start
    "
    >
      <Text 
      className="
      text-lg
      ml-7
      "
      >Recomendações
      </Text>

      <View
      className="
      justify-center
      w-96
      "
      >
      <FlatList
      className='p-4'
      data={recomendacoes}
      renderItem={({item}) => (
        <Recomendacoes />
      )}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingStart: 15,
        paddingEnd: 15
      }}
      ItemSeparatorComponent={() => (
        <View className='ml-2'>

        </View>
      )}
      />
      </View>
    </View>

    
  <View style={{ 
    flex: 1, 
    width: '100%', 
    height: '30vh', 
    backgroundColor:'green',
}}>
  <Text className="text-lg ml-4">Estabelecimentos</Text>

    <FlatList
      style={{ flex: 1, padding: 4 }}
      data={recomendacoes}
      renderItem={({ item }) => <Estabelecimentos />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: 2 }} />}
    />
  </View>
    
   </SafeAreaView>
   </ScrollView>
   </>
  );
}