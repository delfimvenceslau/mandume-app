import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';


interface CategoriasProps extends TouchableOpacityProps{
    title: string;
}
export default function Categorias({title, ...rest}:CategoriasProps) {
 return (
   <>
   <TouchableOpacity
   className="
   bg-white
   rounded-2xl
   w-40
   p-3
   shadow-md
   h-12
   "
   {...rest}
   >
    <Text className='text-black'>{title}</Text>
   </TouchableOpacity>
   </>
  );
}