import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../constants/AppColors";
import PrimaryButton from "../../components/PrimaryButton";

const window = Dimensions.get("window");
const headerContainerHeight = window.height * 0.1;
const backCircleSize = window.width * 0.1;

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputs = [];
  const MAX_INPUTS = 6;

  const handleOtpChange = (index, value) => {
    if (index < MAX_INPUTS - 1 && value) {
      otpInputs[index + 1].focus();
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

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
      <Text style={styles.headerText}>Enter Your OTP</Text>

      <View style={styles.otpSent}>
        <Text style={styles.otpResendText}>
          Enter OTP code we sent to{" "}
          <Text style={styles.boldText}>+132547546xx</Text>
        </Text>
        <Text style={styles.otpExpiryText}>
          This code will expire in{" "}
          <Text style={{ color: AppColors.primaryColor }}>01:30</Text>
        </Text>
      </View>

      <View style={styles.otpInputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value}
            onChangeText={(text) => handleOtpChange(index, text)}
            keyboardType="numeric" // Set keyboardType to "numeric"
            maxLength={1}
            ref={(input) => (otpInputs[index] = input)}
            onSubmitEditing={() => {
              if (index < MAX_INPUTS - 1) {
                otpInputs[index + 1].focus();
              }
            }}
          />
        ))}
      </View>
      <View style={styles.otpResend}>
        <Text style={styles.otpResendText}>Didn't received the code ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("createProfile")}>
          <Text style={styles.otpResendLink}>Resend Code</Text>
        </TouchableOpacity>
      </View>
      <PrimaryButton
        buttonText="Continue"
        onPress={() => navigation.navigate("createProfile")}
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "5%",
    color: AppColors.primaryColor,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    fontSize: 18,
    color: AppColors.primaryColor,
    borderWidth: 1,
    borderColor: AppColors.primaryColor,
    borderRadius: 10,
    textAlign: "center",
    marginHorizontal: 5,
  },

  otpResend: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  otpResendText: {
    color: "black",
  },
  otpResendLink: {
    color: AppColors.primaryColor,
    fontWeight: "bold",
  },
  otpSent: {
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default OtpScreen;
