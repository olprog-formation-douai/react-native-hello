/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button, KeyboardAvoidingView} from "react-native";

const App = () => {

    const [name, setName] = useState();

    return (
        <View style={styles.flex}>
            <TextInput
                style={{backgroundColor: 'yellow', width: '90%'}}
                onChangeText={e => {
                    setName(e);
                }}
                keyboardType={"numeric"}
                value={name}
            />
            <Text style={styles.text50}>Hello world</Text>
            <Text style={styles.text50}>{name}</Text>
            <View style={{
                // flex: 1,
                width: '100%',
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: 'red',
            }}>
                <View style={styles.carre}/>
                <View style={styles.carre}/>
                <View style={styles.carre}/>
            </View>
            <Button title={"Button"}/>
            <Image
                source={require('./assets/outline_fingerprint_black_24dp.png')}
                style={{
                    width: 100,
                    height: 100
                }}
            />

            <Image
                source={{
                    uri: 'https://picsum.photos/200',
                    width: 200,
                    height: 200,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text50: {
        fontSize: 50,
    },
    carre: {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor: 'blue',
    }
})

export default App;

