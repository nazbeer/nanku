import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, ImageBackground, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Vector.png")}
        style={{ top:'7%', alignSelf:'flex-end'}}
      >
      </Image>

      <Image
        source={require("./assets/AppLogo.png")}
        style={{ position:'absolute', alignSelf:'center', bottom:'50%'}}
      >
      </Image>
    </View>
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
