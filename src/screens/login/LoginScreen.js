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
import PrimaryButton from "../../components/PrimaryButton";
import LoginWithGoogleBtn from "../../components/LoginWithGoogleBtn";

const window = Dimensions.get("window");
const logoSize = window.width * 0.8;
const logoImage = require("../../../src/assets/Group.png");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={[styles.logo, { width: logoSize, height: logoSize }]}
      />
      <Text style={styles.header}>Let's Meeting New People Around You</Text>

      <PrimaryButton
        iconName="phone"
        buttonText="Login with Phone"
        onPress={() => navigation.navigate("phoneLogin")}
      />

      <LoginWithGoogleBtn buttonText="Login with Google" />

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
    textAlign: "center",
    margin: 20,
    fontSize: 28,
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
    color: AppColors.primaryColor,
    fontWeight: "bold",
  },
});

export default LoginScreen;
