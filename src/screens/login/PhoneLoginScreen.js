import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../constants/AppColors";
import PhoneInput from "react-native-phone-input";
import PrimaryButton from "../../components/PrimaryButton";

const window = Dimensions.get("window");
const headerContainerHeight = window.height * 0.1;
const backCircleSize = window.width * 0.1;

const PhoneLoginScreen = ({ navigation }) => {
  return (
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
      <Text style={styles.headerText}>Enter Your Number</Text>

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

      <PrimaryButton
        buttonText="Continue"
        onPress={() => navigation.navigate("otp")}
      />

    </View>
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
});

export default PhoneLoginScreen;
