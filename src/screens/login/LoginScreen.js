import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppColors from "../../constants/AppColors";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome"; 

const window = Dimensions.get("window");
const logoSize = window.width * 0.8;
const primaryColor = AppColors.primaryColor;
const primaryColorLight = AppColors.primaryColorLight;

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/assets/Group.png")}
        style={[styles.logo, { width: logoSize, height: logoSize }]}
      />
      <Text style={styles.header}>Let's Meeting New People Around You</Text>
      <View style={styles.loginWithPhoneButton}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.icon}>
            <MaterialIcons name="phone" size={24} color={primaryColor} />
          </View>
          <Text style={styles.buttonTextPhone}>Login with Phone</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginWithGoogle}>
        <TouchableOpacity style={styles.buttonLoginWithGoogle}>
          <View style={styles.icon}>
          <Image  source={require("../../../src/assets/google.png")} style={styles.googleLogo} /></View>
          <Text style={styles.buttonTextGoogle}>Login with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  loginWithPhoneButton: {
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },

  loginWithGoogle: {
    paddingTop: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 30,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  buttonLoginWithGoogle: {
    backgroundColor: primaryColorLight,
    borderRadius: 30,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    width: window.width * 0.1,
    height: window.width * 0.1,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextPhone: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextGoogle: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "black",
  },
  signupLink: {
    color: primaryColor,
    fontWeight: "bold",
  },
  googleLogo:{
    width: 29, 
    height: 29,
  }
});

export default LoginScreen;
