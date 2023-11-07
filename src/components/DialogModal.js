import React from "react";
import { View, StyleSheet } from "react-native";
import { Dialog, Portal, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../constants/AppColors";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const DialogModal = ({ visible, hideDialog }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    hideDialog();
    navigation.navigate("loginHome");
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <View style={styles.centeredContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <MaterialIcons name="check" size={60} color="white" />
            </View>
          </View>
        </View>
        <Dialog.Title style={styles.title}>You're verified</Dialog.Title>
        <Text style={styles.description}>
          Your account is verified. Let's start making friends!
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonText="Get Started" onPress={handleNavigate} />
        </View>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: "center",
  },
  outerCircle: {
    width: 130,
    height: 130,
    backgroundColor: AppColors.primaryColorLight,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 80,
    height: 80,
    backgroundColor: AppColors.primaryColorNormal,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",

    paddingHorizontal: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default DialogModal;
