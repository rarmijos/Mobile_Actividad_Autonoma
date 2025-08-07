import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constant';

interface Props {
    texto: string;
    onPress: () => void;
}

export const ButtonComponent = ({ texto, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 40,
    },
    text: {
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})