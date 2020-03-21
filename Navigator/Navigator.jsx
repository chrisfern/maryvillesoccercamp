import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Views/Home';

const Stack = createStackNavigator();


const Navigator = () => {

  return (
    <NavigationContainer  >
       <Stack.Navigator screenOptions={{
           headerShown: false,
         }}>
       
        <Stack.Screen name="Home" component={Home}/>
      
      </Stack.Navigator>
  </NavigationContainer>
  );
  }

export default Navigator;


