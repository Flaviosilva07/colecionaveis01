



function Inicial({ navigation }) {

    const abrircolecao = () => { 
        navigation.navigate('colecao') 
    }
    
    const abrirItem = () => { 
        navigation.navigate('Item')
    }
    
    return ( 
        <View style={estiloInicial.container}> 
          <View style={estiloInicial.borda}> 
        
              <Text style={estiloInicial.texto}>Inicial</Text> 
        
              <TouchableOpacity style={estiloInicial.botaocontainer} onPress= {abrirColecao}> 
                  <Text style={estiloInicial.botaoTexto}>Coleção</Text> 
              </TouchableOpacity> 
            
              <Touchableopacity style={estiloinicial.botaoContainer} onPress={abrirItem}> 
                  <Text style={estiloInicial.botaoTexto}Item></Text>
              </Touchableopacity> 
            
            </View> 
        </View>
    )
}