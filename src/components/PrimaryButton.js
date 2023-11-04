import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppColors from "../constants/AppColors";
import { MaterialIcons } from "@expo/vector-icons";

const PrimaryButton = ({ buttonText, onPress, iconName }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {iconName && (
          <View style={styles.icon}>
            <MaterialIcons
              name={iconName}
              size={24}
              color={AppColors.primaryColor}
            />
          </View>
        )}

        {!iconName ? (
          <Text style={styles.buttonTextCenter}>{buttonText}</Text>
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    height: 55,
    backgroundColor: AppColors.primaryColor,
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextCenter: {
    width: "100%",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default PrimaryButton;
