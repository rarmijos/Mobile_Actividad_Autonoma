import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constant";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        marginTop: 150,
        paddingHorizontal: 20,
        paddingVertical: 30,
        textAlign: 'center',
    },
    image: {
        width: 400,
        height: 300,
    },
    image2: {
        width: 400,
        height: 300,
        marginTop: 50,
    },
    textRedirect: {
        position: 'absolute',
        top: -185,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center',
    }
});