import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, ImageBackground, Text } from "react-native";
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNav } from "./src/navigations/AppNav";
import { PaperProvider } from "react-native-paper";

export default function App() {
  
  return (
    <PaperProvider>
      <AppNav />
    </PaperProvider>
  );
}

