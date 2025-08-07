import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'

export const Pantalla1 = () => {
    return (
        <View>
            <StatusBar />
            <TitleComponent title='BIENVENIDOS'/>
        </View>
    )
}
