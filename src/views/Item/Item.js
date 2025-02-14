import 'react'; 
import { Text, View, TouchableOpacity } from 'react-native'; 
import estiloItem from './estiloItem'; 

function Item({ navigation }) { 
    
    const voltar = () => { 
        navigation.goBack(); 
    }
    
    return ( 
       <View style={estiloitem.container}> 
          <View style={estiloItem.borda}> 
        
             <Text style={estiloItem.texto}>Item</Text> 
           
             <TouchableOpacity style={estiloTtem.botaocontainer} onPress={voltar}> 
                <Text style={estiloItem.botaoTexto}>Voltar</Text> 
             </TouchableOpacity> 
            
            </View> 
        </View> 
    )
}
export default Item;
