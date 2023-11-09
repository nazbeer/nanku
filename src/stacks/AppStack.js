import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../constants/Routes';
import HomePage from '../screens/home/HomePage';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import PhoneLoginScreen from '../screens/login/PhoneLoginScreen';
import OtpScreen from '../screens/login/OtpScreen';
import CreateProfile from '../screens/profile/CreateProfile';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown:false}}>
            <Stack.Screen name={Routes.login} component={LoginScreen} />
            <Stack.Screen name={Routes.splash} component={SplashScreen} />
            
            <Stack.Screen name={Routes.phoneLogin} component={PhoneLoginScreen} />
            <Stack.Screen name={Routes.home} component={HomePage} />    
            <Stack.Screen name={Routes.otp} component={OtpScreen} />
            <Stack.Screen name={Routes.createProfile} component={CreateProfile} />
        </Stack.Navigator>
    );
};

export default AppStack;