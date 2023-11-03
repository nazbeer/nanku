import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, ImageBackground, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNav } from "./src/navigations/AppNav";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#5D5FEF",
  },

  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerImage: {
    width: 200, // Adjust the width and height as needed
    height: 200,
  },
});
