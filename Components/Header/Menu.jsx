import React from 'react'
import { View, Text,StyleSheet, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'

const Menu = (props) => {
    var view1={
        id: 1,
        name: "Home" 
    }
    var view2={
        id: 2,
        name: "Blank" 
    }
    var views= [view1,view2];

    function handlePress(destination){
        props.navigation.navigate(destination);
    }

    function Item({ name }) {
        return (
          <TouchableOpacity style={styles.list} onPress={()=>handlePress(name)}>
                <Text style={styles.title}>{name}</Text>
          </TouchableOpacity>
        );
      }
   

    return (
       <View style={styles.container}>
           <FlatList
                data={views}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={item => item.id}
            />    
        </View> 
     
    )
}

export default Menu
const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 30,
        backgroundColor: 'orange',
        width: '250%'
    },
    list: {
        borderBottomWidth: 1,
        margin: 10
    },
    title: {
        fontSize: 18
    }
  });
