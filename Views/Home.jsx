import React from 'react';
import { View, Text,StyleSheet,Image, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import PictureButton from '../Components/PictureButton';

const Home = (props) => {
    return (
        
            
        <ImageBackground source={require('../assets/soccerwallpaper26.jpg')} style={{width: '100%', height: '100%'}}>
            

            <ScrollView contentContainerStyle={styles.innerContainer} automaticallyAdjustContentInsets={false}>
                                 
                <PictureButton text="Elite Camp: June 7-11th 2020" uri={require('../assets/mensoccerchamp.jpg')} navigation={props.navigation}/>
                <PictureButton text="Junior Elite Camp: June 1-4th 2020" uri={require('../assets/cnp2105.jpg')} navigation={props.navigation}/>
                <PictureButton text="2020 High School Girls Team Camp: July 12-15th" uri={require('../assets/girlschamps.jpg')} navigation={props.navigation}/>
                <PictureButton text="2020 Maryville College ID and Prospect Camp" uri={require('../assets/shannon.jpg')} navigation={props.navigation}/>
            

            </ScrollView>
        </ImageBackground>
        
    )
}

export default Home;

const styles=StyleSheet.create({
    innerContainer: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        width: '85%',
        borderRadius: 40,
        paddingVertical: 50,
        justifyContent:'space-evenly',
      
    },

    headerText:{
        paddingVertical: 40,
        color: 'maroon',
        fontSize: 24,
        fontWeight:'bold',
        alignSelf: 'center',
    },


})
