import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../constants/AppColors";

const LoginWithApple = ({ buttonText }) => {
  return (
    <View style={styles.loginWithGoogle}>
      <TouchableOpacity style={styles.buttonLoginWithGoogle}>
        <View style={styles.icon}>
          <Image
            source={require("../assets/apple.png")}
            style={styles.googleLogo}
          />
        </View>
        <Text style={styles.buttonTextGoogle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWithGoogle: {
    paddingTop: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonLoginWithGoogle: {
    height: 55,
    backgroundColor: AppColors.primaryColorLight,
    borderRadius: 30,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonTextGoogle: {
    color: AppColors.primaryColor,
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
});

export default LoginWithApple;
