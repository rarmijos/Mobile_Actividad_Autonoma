import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import { IMPUT_COLOR, SECONDARY_COLOR } from '../commons/constant';

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    onChangeText: (text: string) => void;
}

export const ImputComponent = ({ placeholder, keyboardType, onChangeText }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType} //keyboardTypeOpcions
            style={styles.imputText}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    imputText: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
        marginTop: 40,
        width: 210,
    }
})