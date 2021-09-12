import React from "react"; 
import { createStackNavigator } from "@react-navigation/stack"; 
import Login from '../../views/Login/Login'; 
import RotasTab from '../rotasTab/RotasTab'; 
import estiloRotasStack from './estiloRotasStack'; 

const Stack = createStackNavigator (); 

const RotasLoginStack = () => { 
    return ( 
        <Stack.Navigator initialRouteName="Login" > 
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={ { cardStyle: estiloRotasstack.screentLogin, 
                            headerShown: false } } 
            />
            <Stack.Screen 
                name="Inicial" 
                component={RotasTab} 
                options={ { cardstyle: estiloRotasStack.screenInicial, 
                            headerShown: false } }
            /> 
        </Stack.Navigator> 
    ); 
}
export default RotasLoginStack;