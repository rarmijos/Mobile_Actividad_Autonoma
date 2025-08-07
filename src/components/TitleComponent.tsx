import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SECONDARY_COLOR } from '../commons/constant';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://imgs.search.brave.com/YXb7GRxg63R4pBJekuLvycXX6kgPRTA2fn4aur5oQ2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzIzLzIvYmF0bWFu/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTIzNzQ4/My5wbmc' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        marginTop: 150,
        paddingHorizontal: 20,
        paddingVertical: 30,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 300,
    }
});
