import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../constants/AppColors";
import PhoneInput from "react-native-phone-input";
import PrimaryButton from "../../components/PrimaryButton";
import LoginWithGoogleBtn from "../../components/LoginWithGoogleBtn";
import LoginWithApple from "../../components/LoginWithAppleBtn";
import { useNavigation } from "@react-navigation/native";

const window = Dimensions.get("window");
const headerContainerHeight = window.height * 0.1;
const backCircleSize = window.width * 0.1;

const LoginWithPhoneScreen = () => {

    const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backCircle}>
              <MaterialIcons
                name="chevron-left"
                size={24}
                color={AppColors.primaryColor}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Login</Text>

        <Text style={styles.subHeader}>Enter your phone number to login</Text>

        <View style={styles.phoneInputContainer}>
          <PhoneInput
            initialCountry="US"
            flagStyle={styles.flagStyle}
            textStyle={styles.phoneInputText}
            customStyles={{
              container: styles.phoneInputInnerContainer,
              input: styles.hiddenInput,
            }}
          />
        </View>
        <View style={styles.space} />
        <PrimaryButton
          buttonText="Login"
         
        />
       



      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: headerContainerHeight,
    paddingTop: "15%",
  },
  backCircle: {
    width: backCircleSize,
    height: backCircleSize,
    borderRadius: backCircleSize / 2,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "5%",
    fontSize: 24,
    color: AppColors.primaryColor,
  },
  phoneInputContainer: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: AppColors.primaryColor,
    padding: 15,
  },

  phoneInputText: {
    fontSize: 18,
    color: AppColors.primaryColor,
  },
  phoneInputInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hiddenInput: {
    height: 0,
    width: 0,
  },

  signupContainer: {
    flexDirection: "row",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  signupText: {
    color: "black",
  },
  signupLink: {
    color: AppColors.primaryColor,
    fontWeight: "bold",
  },
  subHeader: {
    textAlign: "center",
    paddingTop: 20,
    color: "black",
    paddingBottom: 10,
  },
  space: {
    paddingTop: "20%",
  },
});

export default LoginWithPhoneScreen;
