import React from "react";  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import Profile from '../../views/Perfil/Perfil'; 
import RotasDrawer from '../rotasDrawer/RotasDrawer'; 
 
const Tab = createBottomTabNavigator();

constRoutesTab = () => { 
  return ( 
    <Tab.Navigator
     tabBarOptions={ { labelStyle: { fontsize: 24 }, 
                       style: {backgroundColor: ' #14417b'}, 
                       activeTintcolor: '#FFFFFF' } } 
    >
        <Tab.Screen name="Inicial" component={RotasDrawer} /> 
        <Tab.Screen name="Perfil" component={Perfil} /> 
    </Tab.Navigator> 
  );
}
  
export default RotasTab;