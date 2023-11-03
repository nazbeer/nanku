import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react"
import AppStack from "../stacks/AppStack";
import AuthStack from "../stacks/AuthStack";

export function AppNav() {
    const [isLoading, setIsLoading] = useState(true)
    const [isNetworkAvailable, setIsNetworkAvailable] = useState(false)
    const [isLocationEnabled, setIsLocationEnabled] = useState(true)
    const isUserLoggedIn = false;

    const AppTheme = {
        dark: false,
        colors: {
      //    primary: AppColors.primaryColor,
          background: 'white',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(28, 28, 30)',
          border: 'rgb(199, 199, 204)',
          notification: 'rgb(255, 69, 58)',
        },
      }; 

      return (
        <NavigationContainer >
          {isUserLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      );
}