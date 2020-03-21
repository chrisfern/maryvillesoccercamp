import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Button,StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItemList,DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


const MyDrawer = ()=> {

  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="home" component={Home}/>
         <Drawer.Screen name="header" component={MyHeader}/>
    </Drawer.Navigator>
  );
}


export default MyDrawer;
//export default Feed;


