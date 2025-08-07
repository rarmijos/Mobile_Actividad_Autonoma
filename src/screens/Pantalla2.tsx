import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { PRIMARY_COLOR } from '../commons/constant'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { ImputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'

export const Pantalla2 = () => {

    //hook de navegacion
    const navigation = useNavigation();

    //hook useState
    const [num1, numero1] = useState('');
    const [num2, numero2] = useState('');

    //Logica de la division
    const resultado = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (a == 0 && b == 0) {
            Alert.alert('¡¡¡ BatiResultado !!!', 'Bati-Indeterminado');
        } else if (b == 0) {
            Alert.alert('¡¡¡ BatiResultado !!!', 'La BatiDivisión no existe');
        } else {
            const resultado = a / b;
            Alert.alert('¡¡¡ BatiResultado !!!', 'El BatiResultado es: ' + resultado);
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <Image
                style={styles.image2}
                source={{ uri: 'https://imgs.search.brave.com/YXb7GRxg63R4pBJekuLvycXX6kgPRTA2fn4aur5oQ2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzIzLzIvYmF0bWFu/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTIzNzQ4/My5wbmc' }}
            />
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla1' }))}>
                <Text style={styles.textRedirect}>B A T I - I N I C I O</Text>
            </TouchableOpacity>
            <View>
                <ImputComponent placeholder='Ingrese el primer BatiNumero: ' keyboardType='numeric' onChangeText={numero1} />
                <ImputComponent placeholder='Ingrese el segundo BatiNumero: ' keyboardType='numeric' onChangeText={numero2} />
            </View>
            <ButtonComponent texto='BatiResultado' onPress={resultado} />
        </View>
    )
}
