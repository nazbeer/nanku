import React, { useState, useEffect } from "react";
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
  const [timer, setTimer] = useState(90); // Initial timer value in seconds
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

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

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
          Enter OTP code we sent to{' '}
          <Text style={styles.boldText}>+132547546xx</Text>
        </Text>
        <Text style={styles.otpExpiryText}>
          This code will expire in{' '}
          <Text style={{ color: AppColors.primaryColor }}>
            {`${Math.floor(timer / 60)
              .toString()
              .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`}
          </Text>
        </Text>
      </View>

      <View style={styles.otpInputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value}
            onChangeText={(text) => handleOtpChange(index, text)}
            keyboardType="numeric"
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
        <Text style={styles.otpResendText}>Didn't receive the code ? </Text>
        <TouchableOpacity >
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
    paddingTop: 20,
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
