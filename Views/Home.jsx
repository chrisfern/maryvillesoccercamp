import React from 'react';
import { View, Text,StyleSheet,Image, ImageBackground } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import PictureButton from '../Components/PictureButton';
import Header from '../Components/Header/Header';




const Home = (props) => {
   const dates= props.route.params.dates;
  // const dates=   ["","",""];
    console.log(dates);
    var eliteDate="Elite Camp: " + dates[0];
    var juniorDate="Junior Elite: "+ dates[1]; 
    var girlsDate= "High School Girls Team Camp: " +dates[2];
        

    return (
        
            
        <ImageBackground source={require('../assets/soccerwallpaper26.jpg')} style={{width: '100%', height: '100%'}}>
           
           <Header navigation={props.navigation}/>
            <ScrollView contentContainerStyle={styles.innerContainer} automaticallyAdjustContentInsets={false}>
                          
                <PictureButton text={eliteDate} uri={require('../assets/mensoccerchamp.jpg')} navigation={props.navigation}/>
                <PictureButton text={juniorDate} uri={require('../assets/cnp2105.jpg')} navigation={props.navigation}/>
                <PictureButton text={girlsDate} uri={require('../assets/girlschamps.jpg')} navigation={props.navigation}/>
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
