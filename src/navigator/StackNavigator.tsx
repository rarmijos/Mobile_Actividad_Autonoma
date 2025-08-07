import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1 } from '../screens/Pantalla1';
import { Pantalla2 } from '../screens/Pantalla2';
import { PRIMARY_COLOR } from '../commons/constant';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Pantalla1" options={{headerShown: false}} component={Pantalla1} />
            <Stack.Screen name="Pantalla2" options={{headerShown: false}} component={Pantalla2} />
        </Stack.Navigator>
    );
}