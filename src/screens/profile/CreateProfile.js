import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../constants/AppColors";
import InterestButtons from "../../components/InterestButtons";
import UploadImage from "../../components/UploadImage";

const window = Dimensions.get("window");
const headerContainerHeight = window.height * 0.1;
const backCircleSize = window.width * 0.1;

const CreateProfile = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const [isDialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  const openModal = () => {
    setVisible(true);
  };
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [headerText, setHeaderText] = useState("Enter Your Name");

  const handleNextStep = () => {
    if (step === 1) {
      setHeaderText("Select up to 5 interests");
      setStep(2);
    } else if (step === 2) {
      setHeaderText("Upload Your Photos");
      setStep(3);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <View style={styles.contentContainer}>
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
        <Text style={styles.headerText}>{headerText}</Text>

        {step === 1 && (
          <TextInput
            style={styles.nameInput}
            placeholder="Your Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        )}

        {step === 2 && (
          <>
            <InterestButtons />
          </>
        )}

        {step === 3 && (
          <View>
            <UploadImage />
    
          </View>
        )}
      </View>

      {step !== 3 && (
        <View style={styles.nextButton}>
          <TouchableOpacity onPress={handleNextStep}>
            <View style={styles.circle}>
              <MaterialIcons name="arrow-forward" size={24} color={"white"} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.progressContainer}>
        <Text>
          <Text>
            <Text style={styles.boldText}>{step}</Text>
            <Text style={styles.BoldText}>/3</Text>
          </Text>
        </Text>
      </View>

      <View style={styles.progressBar}>
        <View style={styles.progressBarTrack}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${(step / 3) * 100}%`,
                backgroundColor:
                  step === 1
                    ? AppColors.primaryColorNormal
                    : step === 2
                    ? AppColors.primaryColorNormal
                    : step === 3
                    ? AppColors.primaryColorNormal
                    : "lightgray",
              },
            ]}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
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
  nameInput: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: AppColors.primaryColor,
    padding: 15,
    fontSize: 18,
    color: AppColors.primaryColor,
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  progressBarTrack: {
    flex: 1,
    height: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  progressBarFill: {
    height: 10,
    width: "33.33%",
    backgroundColor: AppColors.primaryColor,
    borderRadius: 10,
  },
  progressCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: AppColors.primaryColor,

    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  BoldText: {
    color: AppColors.primaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CreateProfile;
