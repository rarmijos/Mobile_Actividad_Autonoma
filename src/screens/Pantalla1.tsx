import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';
import { PRIMARY_COLOR } from '../commons/constant';

export const Pantalla1 = () => {

    //hook de navegacion
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <Text style={styles.title}>BIENVENIDOS</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://imgs.search.brave.com/YXb7GRxg63R4pBJekuLvycXX6kgPRTA2fn4aur5oQ2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzIzLzIvYmF0bWFu/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTIzNzQ4/My5wbmc' }}
            />
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}>
                <Text style={styles.textRedirect}>B A T I - I N G R E S A R</Text>
            </TouchableOpacity>
        </View>
    )
}