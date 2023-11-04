import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../constants/Routes';
import HomePage from '../screens/home/HomePage';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown:false}}>
            <Stack.Screen name={Routes.splash} component={SplashScreen} />
            <Stack.Screen name={Routes.login} component={LoginScreen} />
            <Stack.Screen name={Routes.home} component={HomePage} />
     

        </Stack.Navigator>
    );
};

export default AuthStack;