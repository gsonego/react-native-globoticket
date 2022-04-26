import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.globoLogo} 
                source={require('./images/_Export_globoticket-bug-black.png')} 
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text> 
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    globoLogo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '400' 
    }
});

export default Home;