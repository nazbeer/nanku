import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../constants/Routes';
import HomePage from '../screens/home/HomePage';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import PhoneLoginScreen from '../screens/login/PhoneLoginScreen';
import OtpScreen from '../screens/login/OtpScreen';
import CreateProfile from '../screens/profile/CreateProfile';
import DashboardPage from '../screens/dashboard/DashboardPage';
import DiscoverPage from '../screens/discover/DiscoverPage';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown:false}}>
            

            <Stack.Screen name={'tmp'} component={DiscoverPage} />
            <Stack.Screen name={Routes.splash} component={SplashScreen} />
            <Stack.Screen name={Routes.login} component={LoginScreen} />
            <Stack.Screen name={Routes.phoneLogin} component={PhoneLoginScreen} />
            <Stack.Screen name={Routes.home} component={HomePage} />    
            <Stack.Screen name={Routes.otp} component={OtpScreen} />
            <Stack.Screen name={Routes.createProfile} component={CreateProfile} />

            <Stack.Screen name={Routes.dashboard} component={DashboardPage} />
            <Stack.Screen name={Routes.discover} component={DiscoverPage} />
        </Stack.Navigator>
    );
};

export default AuthStack;