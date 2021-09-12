import 'react-native-gusture-handler'; 
import React from 'react'; 
import { StatusBar } from 'react-native'; 
import { NavigationContainer } from '@react navigation/native'; 
import Rotastoginstack from './src/components/rotasstack/Rotastoginstack'; 

export default function App() { 
  return ( 
    <NavigationContainer > 
      
      <StatusBar barStyle="light-content" backgroundcolor="081a31" /> 
      
      <Rotastoginstack /> 
      
    </NavigationContainer>  );
}
